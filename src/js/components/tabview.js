import React from "react";

class Tabs extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTabIndex: 0
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }
    
    handleTabClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
        });
    }
    
      // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick : this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
          });
        });
    }
    
    // Render current active tab content
    renderActiveTabContent() {
        const {children} = this.props;
        const {activeTabIndex} = this.state;
        if(children[activeTabIndex]) {
          return children[activeTabIndex].props.children;
        }
    }
    
    render() {
        return (
          <div className="tabs">
            <ul className="tabs-nav navbar navview-navbar navview-left">
              {this.renderChildrenWithTabsApiAsProps()}
            </ul>
            <div className="tabs-active-content">
              {this.renderActiveTabContent()}
            </div>
          </div>
        );
    }
};
    
Tabs.propTypes = {
    defaultActiveTabIndex: React.PropTypes.number
};
    
Tabs.defaultProps = {
    defaultActiveTabIndex: null
};
    
class Tab extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.handleTabClick = this.handleTabClick.bind(this);
    }
    
    handleTabClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.tabIndex);
    }
    
    render() {
        return (
          <li className="tab">
            <a className={`tab-link ${this.props.linkClassName} ${this.props.isActive ? 'active' : ''}`}
               onClick={this.handleTabClick}>
               {this.props.title}
            </a>
          </li>
        );
    }
}
    
Tab.propTypes = {
    onClick      : React.PropTypes.func,
    tabIndex     : React.PropTypes.number,
    isActive     : React.PropTypes.bool,
    title        : React.PropTypes.string.isRequired,
    linkClassName: React.PropTypes.string.isRequired
  };

export {
    Tabs,
    Tab
}
import React from 'react';
import { scheduleCallback as defer } from 'scheduler';
import MDSpinner from 'react-md-spinner';
import classnames from 'classnames';
import {getState} from './state';
import './App.scss';
import image from './assets/avatar.jpeg';

function App() {
  const [{selectedTab}, ] = getState();
  console.log(selectedTab);
  return (

      <header className="header">
        <h2>Mary Poppins</h2>
        <Tabs />
        <ContentContainer>
          {/* Summary tab*/}
          <TabContent isVisible={selectedTab === 1}>
            <div className="summary">
              <img alt="Mary Poppins poster" className="poster" src={image} />
            </div>
            <div className="info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </TabContent>
          <TabContent isVisible={selectedTab === 2}>
            {/* <Chart /> */}
            <h3>Song stats</h3>
          </TabContent>
          <TabContent isVisible={selectedTab === 3}>
            <div>
            {[1, 2, 3].map(reviewId => (
              <Review key={reviewId} id={reviewId} />
            ))}
            </div>
          </TabContent>
        </ContentContainer>
      </header>

  );
} 
export default App;

function ContentContainer({children}) {
  return (
    <div className="content">{children}</div>
  )
}
function Tabs() {
  const labels = ['Summary', 'Stats', 'Reviews'];
  return (
    [1, 2, 3].map(tabId => 
    <Tab 
      id={tabId} 
      label={labels[tabId-1]} 
      key={tabId}
    />
    )
  );
}
function Tab({id, label}) {
  const [state, dispatch] = getState();

  const setHighlightedTab = () =>
    dispatch({
      type: 'selectedTab',
      selectedTab: id
    });
  const setVisibleTab = () => 
    dispatch({type: 'showTab'});
  // Event handler for a tab click event
  const handleClick = () => {
    setHighlightedTab(id);

    // defer(() => {
    //   setVisibleTab(id);
    // })
  }
  return (
    <TabButton 
      isSelected={state.selectedTab === id} 
      onClick={handleClick}>
      {label}
    </TabButton>
  );
}

function TabButton({onClick, isSelected, children}) {
  const classNames = ['header__button'];
  if (isSelected) {
    classNames.push('header__button--selected');
  }
  return (
    <button 
      className={classnames(classNames)}
      onClick={onClick}>
      {children}
    </button>
  );
}
function TabContent({isVisible, children}) {
  console.log(isVisible);
  if (!isVisible) {
    // return <div hidden={true}>{children}</div>;
    return null;
  } else {
    return children;
  }
}
class Review extends React.Component {
  constructor() {
    super();
    this.state = {data: null}
  }
  componentDidMount = () => {
    this.getLatestData(this.props.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.getLatestData(this.props.id);
    }
  }
  async getLatestData(id) {
    // const review = await fetchAPI(
    //   `/reviews/${id}`,
    // );
    setTimeout(() => this.setState({data: {content: LoremIpsum(), author: 'Lorem Ipsum'}}),Math.floor(Math.random() * Math.floor(5))*1000);
  }
  render() {
    const {data} = this.state;
    if (data === null) return <div className="content__review"><MDSpinner size={50} className="spinner__item" /></div>

    return (
      <div className="content__review">
        <quote>
          <p>{data.content}</p>
          <cite>{data.author}</cite>
        </quote>
      </div>
    )
  }
}

function LoremIpsum() {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}
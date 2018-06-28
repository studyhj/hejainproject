import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Index extends Component{
    constructor(){
        super()
        this.state={
            isShowClick:true
        }
    }
    handleShowOrHide(){
        this.setState({
            isShowClick:!this.state.isShowClick
        })
    }
    render(){
        return(
            <div>
                {this.state.isShowClick? <App />:null}
                <button onClick={this.handleShowOrHide.bind(this)}>显示或隐藏时钟</button>
            </div>

        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

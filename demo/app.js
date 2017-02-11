class SimpleButton extends Component {
    render() {
        return '<button>Hello World</button>';
    }

    /*
    onRender() {
        let self = this;
        setTimeout(() => {
            self.el.innerHTML = 'Good bye world';
        }, 3000);
    } */

    click() {
        alert('you clicked me');
    }
}

render(new SimpleButton(), document.getElementById('app'));
import { observable, action } from 'mobx'

class app {
    @observable input = '';

    @observable combined = null;

    @action
    setInput = value => {
        this.input = value
    }

    @action
    closeOverlay = () => {
        this.combined = null
    }

    @action
    establishChain = async () => {
        let response1 = await fetch(`https://922653b2-76f6-43ca-bd3b-1a5b3b5b71f6.mock.pstmn.io/person?${this.input}`);
        if (response1.status === 404) return this.combined = 'Please enter a number';
        let data1 = await response1.json();
        let response2 = await fetch(`https://922653b2-76f6-43ca-bd3b-1a5b3b5b71f6.mock.pstmn.io/facility?${data1.val1}`);
        let data2 = await response2.json();
        let response3 = await fetch(`https://922653b2-76f6-43ca-bd3b-1a5b3b5b71f6.mock.pstmn.io/exposure?${data1.val2}`);
        let data3 = await response3.json();
        this.combined = data2.val3 * data3.val5;
        this.input = '';
    }
}

export default new app()
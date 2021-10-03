import React, {Component} from 'react';
import '../styles/HeaderFooter.css';

/**
 * @authors : A.M Zumry & M.N.M Akeel
 * Registration Numbers : IT19175126 & IT19153414
 */

class Footer extends Component {
    render() {
        return <div id={'footer'}>
            <div id={'copyright'}>
                <label id={'contInfoLabel'}>Copyright &copy;2021 Procurement Management System. All right
                    reserved</label>
                {/*<hr/>*/}
            </div>
        </div>
    }
}

export default Footer;

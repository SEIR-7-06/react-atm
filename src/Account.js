import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        balance: 0
    }
    
    handleDepositSubmit = e => {
        console.log(e.target);
        e.preventDefault()

        if (this.state.amount < 0) {
            return;
        }

        if (isNaN(this.state.amount)) {
            console.log("Not a number")
        }
        else {
            this.setState({
                balance: this.state.balance + Number(this.state.amount)
            })
        }
        this.setAmount(0)
    }

    handleWithdrawalSubmit = e => {
        e.preventDefault()
        
        if (this.state.amount >= 0) {
            // This is a check to make sure the input amount is always greater than 0
            
            if (this.state.amount <= this.state.balance) {
                console.log(e.target);
                
                if (isNaN(this.state.amount)) {
                    console.log("Not a number")
                }
                else {
                    this.setState({
                        balance: this.state.balance - Number(this.state.amount)
                    })
                }
                this.setAmount(0)
            }
            
        }
        
    }

    setAmount = amount => {
        this.setState({
            amount: amount
        })
    }

    render () {
        let balanceClass = 'balance'
        if (this.state.balance <= 0) {
            balanceClass += ' zero'
        }

        return (
            <div className="account">
                <h2>{this.props.name}</h2>
                <div className={balanceClass}>${this.state.balance}</div>
                <form>
                    <input 
                        type="text" 
                        placeholder="enter an amount" 
                        value={this.state.amount} 
                        onChange={ e => this.setAmount(e.target.value) }
                    />
                    <button onClick={this.handleDepositSubmit}>Deposit</button>
                    <button onClick={this.handleWithdrawalSubmit}>Withdrawal</button>
                </form>
                
            </div>
        )

        
    }

    
}

export default Account
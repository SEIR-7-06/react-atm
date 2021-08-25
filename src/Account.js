import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        balance: 0
    }
    
    handleDeposit = e => {
        e.preventDefault()
        if (isNaN(this.state.amount) || (this.state.amount) < 0) {
            return console.log("Not a number")
        }
        else {
            this.setState({
                balance: this.state.balance + Number(this.state.amount)
            })
        }
        this.setAmount(0)
    }

    setAmount = amount => {
        this.setState({
            amount: amount
        })
    }
    handleWithdraw = e => {
        e.preventDefault()
        if (isNaN(this.state.amount) || (this.state.amount) < 0 ) {
             return console.log("Not a number")
        }
        else {
            this.setState({
                balance: this.state.balance - Number(this.state.amount)
            })
        }
        this.setAmount(0)
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

                <form onSubmit={this.handleDeposit}>
                    <input 
                        type="text" 
                        placeholder="enter an amount" 
                        value={this.state.amount} 
                        onChange={ e => this.setAmount(e.target.value) }
                    />
                    <input type="submit" value="Deposit"  />
                    </form>

                <form onSubmit={this.handleWithdraw}>
                    <input type="submit" value="Withdraw"  />
                </form>

            </div>
        )
    }
}

export default Account
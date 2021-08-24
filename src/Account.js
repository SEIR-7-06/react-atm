import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        balance: 0
    }
    
    handleDeposit = e => {
        e.preventDefault()
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

    handleWithdrawl = e => {
        e.preventDefault()
        if (isNaN(this.state.amount)) {
            console.log("Not a number.")
        }  
        if (this.state.amount > this.state.balance) {
            alert("You don't have enough money!")
        } else {
            this.setState ({
                balance: this.state.balance - Number(this.state.amount)
            })
        }
        this.setAmount(0)
    }

    setAmount = amount => {
        if (amount < 0) {
            alert("Choose a number larger than zero!")
        } else {
            this.setState({
                amount: amount
            })
        }
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
                <form >
                    <input 
                        type="text" 
                        placeholder="enter an amount" 
                        value={this.state.amount} 
                        onChange={ e => this.setAmount(e.target.value) }
                    />
                    <input onClick = {this.handleDeposit} type="submit" value="Deposit" />
                    <input onClick = {this.handleWithdrawl} type="submit" value="Withdraw" />
                </form>
            </div>
        )
    }
}

export default Account
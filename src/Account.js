import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        withdrawal:0,
        balance: 0
    }
    
    handleSubmit = e => {
        e.preventDefault()
        if (isNaN(this.state.amount)|| this.state.amount < 0) {
            console.log("Not a number or negative entered")
        }
        else {
            this.setState({
                balance: this.state.balance + Number(this.state.amount)
            })
        }
        this.setAmount(0)
    }
    handleDeposit = e =>{
        e.preventDefault()
        if (isNaN(this.state.withdrawal) || this.state.withdrawal > this.state.balance ||this.state.withdrawal < 0){
            console.log("You either entered a withdrawal that is larger than the balance or you did not enter a number or you entered a negative number.")
        }else{
            this.setState({
                balance: this.state.balance - Number(this.state.withdrawal)
            })
        }
    }
    setWithdrawal = withdrawal =>{
        this.setState({withdrawal:withdrawal})
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
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="enter an amount" 
                        value={this.state.amount} 
                        onChange={ e => this.setAmount(e.target.value) }
                    />
                    <input type="submit" value="Deposit" />
                </form>
                <form onSubmit={this.handleDeposit}>
                    <input 
                        type="text"
                        placeholder="Enter a withdrawal amount"
                        value={this.state.withdrawal} 
                        onChange= {e=>this.setWithdrawal(e.target.value)} 
                    />
                    <input type="submit" value="Withdraw"/>
                </form>
            </div>
        )
    }
}

export default Account
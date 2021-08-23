import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        balance: 0
    }
    
    handleSubmit = e => {
        e.preventDefault()
        if (isNaN(this.state.amount) || (this.state.amount <= 0)) {
            console.log("Not Valid")
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

    handleWithdraw = (e) => {
        // console.log('withdraw ' + this.state.amount );
        e.preventDefault()

        if (isNaN(this.state.amount) || (this.state.amount <= 0)) {
            console.log("Not Valid")
        }
        else if (this.state.balance < this.state.amount) {
            console.log('NOT ENOUGH FUNDS');
        } else {
            this.setState({
                balance: this.state.balance - Number(this.state.amount)
              })
        }
    
        this.setAmount(0) 
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
                    <button onClick={this.handleWithdraw} type="submit" value="Withdraw">Withdraw</button>
                </form>
               
            </div>
        )
    }
}

export default Account
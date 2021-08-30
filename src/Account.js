import { Component } from 'react'

class Account extends Component {
    state = {
        amount: 0,
        balance: 0
    }
    
    handleSubmit = e => {
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

//////////////
    handleWithdraw = e => { 
        e.preventDefault()
        if (isNaN(this.state.amount)) {
            console.log("Not a number")
        }
        else if (this.state.balance < Number(this.state.amount))
        console.log('you cannot take out more thank what you have!')
        else
        this.setState({
            balance: this.state.balance - Number(this.state.amount)
        })
    }

////////////////
//  preventNegative = (e) => {
// if (this.state.balance < 0) {   
//             e.preventDefault() 
//         }
//////////////////////////////////////
//     onChange = (e) => {
//     if (this.state.balance < 0 || this.state.balance >= 0) {
//       this.setState(this.state.balance);
//     }
//   }

/////////////////////
    setAmount = amount => {
        this.setState({
            amount: amount
        })
        // if (this.amount > 0){  
        // }
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
                <form onSubmit={this.handleWithdraw}>
                <input type="submit" value="Withdraw" 
                onChange={ e => this.setAmount(e.target.value) }/>
                </form>
            </div>
        )
    }
}

export default Account
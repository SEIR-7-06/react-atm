import React from 'react'





class Savings extends React.Component {
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

    setAmount = amount => {
        this.setState({
            amount: amount
        })
    }



    
    
    
    
    handleWithdraw = (event) => {
        event.preventDefault()
        console.log(this.state.balance, this.state.amount)
        if (this.state.balance <= 0) {
            console.log("Ain't No Mo Money!")
        } else if (this.state.amount > this.state.balance) {
            console.log("not enough money")
        }
        else {
            this.setState({ balance: this.state.balance - Number(this.state.amount) })
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
            <form >
                <input 
                    type="text" 
                    placeholder="enter an amount" 
                    value={this.state.amount} 
                    onChange={ e => this.setAmount(e.target.value) }
                    />
                {/* <input type="submit" value="Deposit" /> */}
                <button onClick={this.handleSubmit}>Deposit</button> 
                <button onClick={this.handleWithdraw}>Withdraw</button> 
                    
                    
            </form>
        </div>
    )
}
}


export default Savings
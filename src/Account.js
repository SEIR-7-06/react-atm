import { Component } from 'react'

class Account extends Component {
    state = {
        depositAmount: '',
        withdrawAmount: '',
        balance: 0
    }

    // {/* Deposit */}
    handleDepositSubmit = e => {
        e.preventDefault()
        if (isNaN(this.state.depositAmount)) {
            console.log("Not a number")
        }

        else {
            this.setState({
                balance: this.state.balance + Number(this.state.depositAmount)
            })
        }
        this.setDepositAmount('')
    }

    // {/* Withdraw */}
    handleWithdrawSubmit = e => {
        e.preventDefault()
        if (isNaN(this.state.withdrawAmount)) {
            console.log("Not a number")
        }
        else if (this.state.balance <= this.state.withdrawAmount) { 
            alert("You do not have enough funds.")
        }
        else {
            this.setState({
                balance: this.state.balance - Number(this.state.withdrawAmount)
            })
        }
        this.setWithdrawAmount('')
    }

    setDepositAmount = depositAmount => {
        this.setState({
            depositAmount: depositAmount
        })
    }

    setWithdrawAmount = withdrawAmount => {
        this.setState({
            withdrawAmount: withdrawAmount
        })
    }

    render() {
        let balanceClass = 'balance'
        if (this.state.balance <= 0) {
            balanceClass += ' zero'
        }

        return (
            <div className="account">
                <h2>{this.props.name}</h2>
                <div className={balanceClass}>
                    ${this.state.balance}
                </div>

                {/* Deposit */}
                <form onSubmit={this.handleDepositSubmit}>
                    <input
                        type="text"
                        placeholder="enter a deposit amount"
                        value={this.state.depositAmount}
                        onChange={e => this.setDepositAmount(e.target.value)}
                    />
                    <input type="submit" value="Deposit" />
                </form>

                {/* Withdraw */}
                <form onSubmit={this.handleWithdrawSubmit}>
                <input
                    type="text"
                    placeholder="enter a withdrawal amount"
                    value={this.state.withdrawAmount}
                    onChange={e => this.setWithdrawAmount(e.target.value)}
                />
                <input type="submit" value="Withdraw" />
            </form>

            </div>
        )
    }
}

export default Account
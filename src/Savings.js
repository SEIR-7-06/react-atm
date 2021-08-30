// import { Component } from 'react'

// class Savings extends Component {
//     state = {
//         savingsamount: 0,
//         savingsbalance: 0
//     }
    
//     handleSubmit = e => {
//         e.preventDefault()
//         if (isNaN(this.state.amount)) {
//             console.log("Not a number")
//         }
//         else {
//             this.setState({
//                 savingsbalance: this.state.savingsbalance + Number(this.state.amount)
//             })
//         }
//         this.setAmount(0)
//     }

// //////////////
//     handleWithdraw = e => { 
//         e.preventDefault()
//         if (isNaN(this.state.amount)) {
//             console.log("Not a number")
//         }
//         else if (this.state.savingsbalance < Number(this.state.amount))
//         console.log('you cannot take out more thank what you have!')
//         else
//         this.setState({
//             savingsbalance: this.state.savingsbalance - Number(this.state.amount)
//         })
//     }

// /////////////////////
//     setAmount = amount => {
//         this.setState({
//             amount: amount
//         })
//         // if (this.amount > 0){  
//         // }
//     }

//     render () {
//         let savingsbalanceClass = 'savingsbalance'
//         if (this.state.savingsbalance <= 0) {
//             savingsbalanceClass += ' savingszero'
//         }n
//         return (
//             <div className="account">
//                 <h2>{this.props.name}</h2>
//                 <div className={savingsbalanceClass}>${this.state.savingsbalance}</div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input 
//                         type="text" 
//                         placeholder="enter an amount" 
//                         value={this.state.amount} 
//                         onChange={ e => this.setAmount(e.target.value) }
//                     />
//                     <input type="submit" value="Deposit" />
//                 </form>
//                 <form onSubmit={this.handleWithdraw}>
//                 <input type="submit" value="Withdraw" 
//                 onChange={ e => this.setAmount(e.target.value) }/>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Savings
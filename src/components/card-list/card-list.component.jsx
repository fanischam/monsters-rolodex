import {Component} from 'react'

class CardList extends Component {
    render() {
        const { monsters} = this.props;
        return(
        <div>
            {
                monsters.map((mon) => {
                    return <div key={mon.id}><h1>{mon.name}</h1></div>
                })
            }
        </div>
        )
    }
}

export default CardList;
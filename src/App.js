import React , {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component{

  state={ persons:[
                    {id:1,name:"Priyank",age:30},
                    {id:2,name:"Rajeev",age:29},
                    {id:3,name:"Manish",age:31}
                  ],
          other:"other",
          showPerson:false
        }

  switchNameHandler=()=>{
    console.log("-----------aa--------------");
    console.log(this);
    this.setState(
      { persons:[
        {id:1,name:"Priyank Sinha",age:30},
        {id:2,name:"Rajeev",age:29},
        {id:3,name:"Manish",age:31}
      ]
     }

    );
  }

  changeNameHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    
    const person={...this.state.persons[personIndex]};

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});
  }

 deletePersonHandler=(personIndex)=>{
  const person=this.state.persons;
  person.splice(personIndex,1);
  this.setState({persons:person});
 }

  togglePersonHandler=()=>{
    this.setState({showPerson:!this.state.showPerson})
  }
  render(){
    const style={
      backgroundColor: 'green',
      border:'1px solid blue',
      padding: '8px'
    }
let persons = null;
console.log("+++++++++++++++++++++++++++++++++++++++++++");
if(this.state.showPerson){
  persons=(
          <div>
            {this.state.persons.map((person,index)=>{
              return <Person 
                      name={person.name}
                      age={person.age}
                      changeName={(event)=>this.changeNameHandler(event,person.id)}
                      click={()=>this.deletePersonHandler(index)}
                      key={person.id}
                      />
            })}
          </div>
  );
}


  return (
    
    <div className="App">
      <button onClick={this.switchNameHandler} style={style}>Switch Name</button>
      <button onClick={this.togglePersonHandler} style={style}>Toggle Name</button>
     { persons }
    </div>
  );
}
}
export default App;

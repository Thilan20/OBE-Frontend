import React from 'react'
import { Link} from 'react-router-dom'
import Logo from './logo.jpg';
import {OutTable,ExcelRenderer} from 'react-excel-renderer';
import Tabletop from 'tabletop';
export class View extends React.Component  {

  constructor() {
    super()
    this.state = {
      rows:"",
      cols:"",
      data: []
    }
  }

  fileHandler=(event)=>{
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj,(err,resp)=>
    {
      if(err){
        console.log(err);
        }
        else{
            this.setState({
                cols:resp.cols,
                rows:resp.rows
            });
        }
    });
  }

  componentDidMount() {
    Tabletop.init({
      key: '10pf4mCEZ-jke-uTwg78nM4Eg1vHIzgqdS-ewDyfOhAM',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render(){
    console.log('updated state --->', this.state)
    const { data } = this.state
  return (
    <div>
        <div class= "header">
          <img src={Logo} alt ='weblogo' />
          <h1>
              <Link className="header" to='/'  >
                  Faculty of Engineering University of Ruhuna
              </Link>
          </h1>
                            
          <h2>Outcome Based Education System</h2>

        </div>

        <div class ="title">
            <h2> Department of Electrical and Information Engineering</h2>
            <h3>Cousrse assigned by Head of the Department</h3>
        </div>



      <div className="container">
        <h3 className="center">Lecturer</h3>

    <input type="file" onChange={this.fileHandler.bind(this)}  />
    <div>{this.state.rows&& <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading"/>}</div>
      </div>

      <div className="container">
          {
            data.map(obj => {
              return (
                <div key={obj.employee}>
                  <table className="table table-striped "  style={{ marginTop: 10 }}>
              
                  <tr>
                 <td colSpan="1"> {obj.employee}</td>
                 <td colSpan="1">{obj.favDog}</td>
                 </tr></table>
                </div>
              )
            })
          }
        </div>
    </div>
  );
}
}

export default View
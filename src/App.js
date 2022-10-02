import './App.css';
import { useState, useEffect } from 'react'
import React from 'react'

function App() {

  const [name, setName] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [length, setLength] = useState("0")

  const [myLocalStorageData, setMyLocalStorageData] = useState([])


  const handleInput = (e) => {

    var datas = JSON.parse(localStorage.getItem('datas') || "[]")
    var data = {
      name: name,
      vehicle: vehicle,
      checkIn: checkIn,
      checkOut: checkOut
    }
    datas.push(data)

    localStorage.setItem('datas', JSON.stringify(datas))
    setLength(datas.length)
    setVehicle("")
    setName("")
    setCheckIn("")
    setCheckOut("")
    alert("Submitted")

  }

  useEffect(() => {
    var itemqty = JSON.parse(localStorage.getItem("datas")) || [];
    setMyLocalStorageData(itemqty)
    console.log('itemqty:', itemqty)
    setLength(itemqty.length)

  }, [])

  return (
    <>
      <div className="topbar">
        <h2> PARKING APP</h2>
      </div>
      <div className="totalBox">
        <h2> Total vehicle parked : {length}</h2>
      </div>


      <div className="img" style={{
        backgroundImage: `url('https://www.way.com/parking-bg.e5b0e71854868e58b620.jpg')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat", width: "100%", height: "500px"
      }}>

        <div className="box" style={{ color: "white", fontSize: "22px", fontWeight: "400" }}>
          <label> Vehicle Number : </label>
          <input type="text" name="vehicleNumber" value={vehicle} onChange={(e) => setVehicle(e.target.value)} style={{ marginLeft: "42px" }} /> <br />
          <label> Driver Name : </label>
          <input type="text" name="driverName" value={name} onChange={(e) => setName(e.target.value)} style={{ marginLeft: "75px" }} /> <br />
          <label> Checkin Time :</label>
          <input type="time" name="checkIn" value={checkIn} placeholder="Checkin Time" onChange={(e) => setCheckIn(e.target.value)} style={{ marginLeft: "73px" }} /> <br />
          <label> Checkout Time :</label>
          <input type="time" name="checkOut" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} style={{ marginLeft: "60px" }} /> <br />

          <button onClick={handleInput}>Submit </button>

        </div>
      </div>



      <div className="container" style={{}}>{
        myLocalStorageData.map((e) => {
          return (
            <>

              <div className="dataBox">
                <h4 style={{ padding: "0px 10px" }} >Vehicle No:  <span style={{ padding: "0px 45px" }}> {e.vehicle} </span> </h4>
                <h4 style={{ padding: "0px 10px" }}> Driver Name: <span style={{ padding: "0px 30px" }}> {e.name} </span></h4>
                <h4 style={{ padding: "0px 10px" }} >Checkin: <span style={{ padding: "0px 65px" }}> {e.checkIn} </span> </h4>
                <h4 style={{ padding: "0px 10px" }} >Checkout: <span style={{ padding: "0px 57px" }}> {e.checkOut} </span> </h4>
              </div>

            </>
          )
        })
      }

      </div>


    </>
  );
}

export default App;

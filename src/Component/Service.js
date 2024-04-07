import React from 'react'
import logo from '../Images/logo.png'

const Service = () => {
    return (
        <div className='container bg-light ' style={{ padding: '100px' }}>
            <h1 style={{ fontFamily: 'monospace' }}>Service</h1>
            <div className="card mb-3" style={{ maxwidth: '540px' }}>
                <div className="row no-gutters" style={{ padding: '50px 0' }}>
                    <div className="col-md-4">
                        <img src={logo} height={200} width={150} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxwidth: '540px' }}>
                <div className="row no-gutters" style={{ padding: '50px 0' }}>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={logo} height={200} width={150} className="card-img" alt="..." />
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxwidth: '540px' }}>
                <div className="row no-gutters" style={{ padding: '50px 0' }}>
                    <div className="col-md-4">
                        <img src={logo} height={200} width={150} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{ maxwidth: '540px' }}>
                <div className="row no-gutters" style={{ paddingButtom: '0' }}>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={logo} height={200} width={150} className="card-img" alt="..." />
                    </div>
                </div>
            </div>
            <hr />
            <div style={{ height: '10px', backgroundColor: 'black' }}></div>
        </div>
    )
}

export default Service
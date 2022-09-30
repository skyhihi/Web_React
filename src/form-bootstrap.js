import React from 'react'

export default function FormBootstrap() {
    return (
        <div className='mt-3 mx-auto p-3' style={{ width: "400px", background: "#cee" }}>
            <form>
                <div class="form-group mb-3">
                    <label htmlFor="login">Login</label>
                    <input type="text" id='login' name='login' className='form-control' />
                </div>
                <div class="form-group mb-3">
                    <label htmlFor="login">Password</label>
                    <input type="password" id='pswd' name='pswd' className='form-control' />
                </div>
                <div class="form-group mb-4">
                    <label htmlFor="select1">Select</label>
                    <select name="select1" id="select1" className='form-select'>
                        <option value="1">Item 1</option>
                        <option value="1">Item 2</option>
                        <option value="1">Item 3</option>
                    </select>
                </div>
                <button className='btn btn-primary'>OK</button>
            </form>
        </div>
    )
}

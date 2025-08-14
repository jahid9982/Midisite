import React from 'react';

const BookingModal = ({ options, setOptions, date }) => {
    const { name, slots } = options
    const handleModal = (e) => {
        e.preventDefault()
        const form = e.target
        const time = form.select.value
        const email = form.email.value
        const phone = form.phone.value
        const PesintName = form.name.value
        const info = {
            name,
            time,
            email,
            phone,
            PesintName,

        }
        console.log(info);


        // setOptions(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">

                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">{name}</h3>
                        <label htmlFor="booking_modal" className="btn rounded-full bg-primary text-white font-semibold text-center">X</label>
                    </div>
                    <form onSubmit={handleModal}>
                        <select name='select' className="select  my-3 w-full mt-5">
                            {
                                slots?.map((slot, index) => <option key={index} value={slot} >{slot}</option>)
                            }

                        </select>
                        <input type="text" readOnly placeholder="date " defaultValue={date} className="input my-3 w-full" />

                        <input type="text" name='name' placeholder="Name here" className="input my-3 w-full" />
                        <input type="email" name='email' placeholder="Email here" className="input my-3 w-full" />
                        <input type="number" name='phone' placeholder="Phone Number here" className="input my-3 w-full" />
                        <button className="btn  text-white font-semibold my-3 w-full bg-primary" > Submit </button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default BookingModal;
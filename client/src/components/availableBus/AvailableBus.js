import React from 'react';
import Navbar from './Navbar';
import Filters from './Filters';
import BusDetails from './BusDetails';
import Paging from './Paiging'; 

function AvailableBus() {
    return (
        <>
            <Navbar />
            {/* <BusDetailsDropDown /> */}
            <div className='container-fluid px-md-5' style={{ paddingTop: "80px" }}>
                <div className='row'>
                    <section className='col-md-4 mt-3 display-filters'>
                        <Filters />
                    </section>
                    <section className='col-md-8 mt-3'>
                        <Paging />
                        
                        <BusDetails />
                    </section>
                </div>
            </div>
        </>
    );
}

export default AvailableBus;

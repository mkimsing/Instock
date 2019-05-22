import React from 'react';

function AllWarehouses(props) {
    return(
        <div>
            <div>
                <h1>Locations</h1>
                <div>Search bar</div>
            </div>
            <div>
                <div>WAREHOUSE</div>
                <div>CONTACT</div>
                <div>CONTACT INFORMATION</div>
                <div>CATEGORIES</div>
            </div>
            <div>
                <WarehousesList />
            </div>
        </div>
    )
}

function WarehousesList(props) {
    return (
        <div>
            <Warehouse />
        </div>
    )
}

function Warehouse(props) {
    return (
        <div>
            <div>
                <div>
                    <div>Warehouse name</div>
                    <div>Warehouse address</div>
                </div>
                <div>arrow icon</div>
            </div>
            <div>
                <div>Contact name</div>
                <div>Contact position</div>
            </div>
            <div>
                <div>Contact number</div>
                <div>Contact email</div>
            </div>
            <div>
                <div>Description of services</div>
            </div>
        </div>
    )
}

export default AllWarehouses;
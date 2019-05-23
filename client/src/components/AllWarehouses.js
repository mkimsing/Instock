import React from 'react';

function AllWarehouses(props) {
    // console.log(props.warehouses)
    return (
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
                <WarehousesList warehouses={props.warehouses} />
            </div>
        </div>
    )
}

function WarehousesList(props) {
    const warehouseArray = props.warehouses
    // console.log(warehouseArray)
    if (Object.keys(warehouseArray).length === 0) return <div>Loading...</div>
    const warehouseList = warehouseArray.map((warehouse) => {
        return <Warehouse
            warehouse={warehouse}
        />
    })
    return (
        <div>
            {warehouseList}
        </div>
    )
}

function Warehouse(props) {
    console.log(props.warehouse)
    const categories = (props.warehouse.categories)
    function categorySort(catArr) {
        for (let i = 0; i < catArr.length; i++) {
            if (i < catArr.length - 1) {
                catArr[i] = catArr[i] + ", "
            }
        }
        return catArr
    }
    categorySort(categories)
    return (
        <div>
            <div>
                <div>
                    <div>{props.warehouse.name}</div>
                    <div>{props.warehouse.location}</div>
                </div>
                <div>arrow icon</div>
            </div>
            <div>
                <div>{props.warehouse.contact.name}</div>
                <div>{props.warehouse.contact.position}</div>
            </div>
            <div>
                <div>{props.warehouse.contact.phone}</div>
                <div>{props.warehouse.contact.email}</div>
            </div>
            <div>
                <div>{props.warehouse.categories}</div>
            </div>
        </div>
    )
}

export default AllWarehouses;
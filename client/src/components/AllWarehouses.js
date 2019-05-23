import React from 'react';
import RightArrow from '../assets/Icons/SVG/Icon-arrow-right.svg';

function AllWarehouses(props) {
    return (
        <div className='warehousesPage'>
            <div className='warehousesPage__header'>
                <h1 className='warehousesPage__header--title'>Locations</h1>
                <form>
                    <div className='warehousesPage__header--search'>
                        <input className='warehousesPage__header--search warehousesPage__header--searchBar' type='text' name='search' placeholder='Search'></input>
                    </div>
                </form>
            </div>
            <div className='warehousesPage__desktop--categories'>
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
            <div className='warehousesPage__warehouse'>
                <div className='warehousesPage__warehouse--nameLoc'>
                    <div className='warehousesPage__warehouse--name'>{props.warehouse.name}</div>
                    <div className='warehousesPage__warehouse--loc'>{props.warehouse.location}</div>
                </div>
                <div className='warehousesPage__warehouse--arrow'>
                    <img src={RightArrow} />
                </div>
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
                <div className='warehousesPage__desktop--arrow'>
                    <img src={RightArrow}></img>
                </div>
            </div>
        </div>
    )
}

export default AllWarehouses;
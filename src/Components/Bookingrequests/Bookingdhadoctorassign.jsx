import React from 'react';
import './Bookingdhadoctorassign.css';
import { Link } from "react-router-dom";
import Done from "../Assets/Done.svg";
import {Footer} from '../Dhamanagement/Footer';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';

export const Bookingdhadoctorassign = () => {
  return (
    <>
    
    <div className='bookingdha_doctorassign'>
    <div className='bookingdha_doctorassign_blocklab_success_adddha_success_2'>
            <div className='bookingdha_doctorassign_blocklab_success_adddha_success_box_2'>
                <div className='bookingdha_doctorassign_blocklab_success_adddha_success_box_logo_2'>
                    <img src={Done} alt="" />

                </div>
                <div className='bookingdha_doctorassign_blocklab_success_adddha_success_box_para'>
                    <h4 className='bookingdha_doctorassign_blocklab_success_adddha_success_box_head_2'>Doctor Assigned</h4>
                    <p className='bookingdha_doctorassign_blocklab_success_adddha_success_box_pi_2'>The doctor “Name” is successfully assigned for case #1234 on ” Date”</p>

                </div>
                
                <Link to={"/labdetails"} className='bookingdha_doctorassign_blocklab_success_link'>
                <button className='bookingdha_doctorassign_blocklab_success_adddha_success_box_btn_2'>View Status</button>
                </Link>
                

            </div>
            
        </div>
    </div>
    
    </>
  )
}
export default Bookingdhadoctorassign
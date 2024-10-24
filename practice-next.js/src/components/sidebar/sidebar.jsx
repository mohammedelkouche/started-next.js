// import { useRouter } from "next/router";
'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
// import '../../styles/sidebar/sidebar.css';
import '@/styles/sidebar/sidebar.css';
// import '@/styles/globals.css';

export default function Sidebar() {

    const router = useRouter();
    const sidebarItems = [
        {label: 'Home', icon: '/vector.svg', route: '/'},
        {label: 'Freinds',icon: '/3-User.svg', route: '/freinds'},
        {label: 'Profile',icon: '/Profile.svg', route: '/profile'},
        {label: 'Chat',icon: '/chat.svg', route: '/chat'},
        {label: 'Game',icon: '/Game.svg', route: '/Game'},
        {label: 'Setting',icon: '/Setting.svg', route: '/Setting'},
        // {label: 'Logout',icon: '/Logout.svg', route: '/Logout'},
        // {label: 'Logout',icon: '../public/back.png', route: '/Logout'},
    ];

    return(
        <div className ="div_sidenav">
            <div className ="sidenav">
                <div className ="logo">
                    <img src="new-logo.svg" alt="" />
                    {/* <h2> ping pong</h2> */}
                </div>
                <div className ="icon_items">
                    <ul>
                        {sidebarItems.map((item, index) =>
                            <li key={index} className={router.pathname === item.route ? 'active' : ''}
                            
                            onClick={()=>router.push(item.route)}
                            >
                                <img  src={item.icon} alt= {item.label} />
                                {/* <Image src={item.icon} alt= {item.label}  width={24} height={24} /> */}
                                {/* <Image src={item.icon} alt= {item.label}  width={24} height={24} /> */}
                                {/* <span>{item.label}</span> */}
                            </li>
                        )
                        }
                    </ul>
                </div>
                <div className ="Logout">
                    <ul>
                        <li>
                            <img src="/Logout.svg" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ); 
}


// export default function Sidebar() {
//     return(
//         <div className ="container">
//             <div className ="sidenav">
//                 <div className ="logo">
//                     <img src="new-logo.svg" alt="" />
//                     {/* <h2> ping pong</h2> */}
//                 </div>
//                 <div className ="search_bar">
//                     <i className ='bx bx-search' ></i>
//                     <input type="text" placeholder="search ..."/>
//                     {/* <!-- <input type="search" placeholder="search ..."> --> */}
//                 </div>
//                 <div className ="icon_items">
//                     <ul>
//                         <li> 
//                             <i className ='bx bxs-home'></i>
//                             <img src="Vector.svg" alt="" />
//                             {/* <a href="#">frfgerg</a> */}
//                         </li>
//                         <li>
//                             <i className ='bx bxs-user' ></i>
//                             {/* <a href="#"></a> */}
//                         </li>
//                         <li> 
//                             <i className ='bx bxs-group' ></i>
//                             {/* <a href="#"></a> */}
//                         </li>
//                         <li>
//                             <i className ='bx bxs-message-rounded-dots'></i>
//                             {/* <a href="#"></a> */}
//                         </li>
//                         <li> 
//                             {/* <!-- gear --> */}
//                             <i className ='bx bxs-cog' ></i>
//                             {/* <a href="#"></a> */}
//                         </li>
//                         <li>
//                             <i className ='bx bx-log-out'></i>
//                             {/* <a href="#"></a> */}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     ); 
// }
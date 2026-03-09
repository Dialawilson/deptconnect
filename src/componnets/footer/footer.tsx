import logo from "@/assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import {Instagram, Twitter, Linkedin  } from "@deemlol/next-icons";
export default function Footer(){
    <>
    
    <section>
        <div className="">
            <Image src={logo} alt="logo"/> 
            <p>Your Departmental Hub for Voting, Shoping and Transparent.</p>
        </div>
        <div>
            <h3>Company</h3>
            <Link href={"#2"}>About Us</Link>
            <Link href={"w"}>Feature</Link>
            <Link href={"w"}>Activies</Link>
        </div>
        <div>
            
        </div>

    </section>
    </>
}
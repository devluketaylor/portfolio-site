import {FaGithub, FaGoodreads, FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Page} from "@/lib/types";

export const pageLinks = [{ name: "Home", href: "/", rel: Page.Home }, { name: "Contact", href: "/contact", rel: Page.Contact }, { name: "Blog", href: "/blog", rel: Page.Blog }];
export const socialLinks = [{ icon: FaGithub, name: "Github", href: "https://github.com/devluketaylor" }, { icon: FaXTwitter,name: "Twitter", href: "https://x.com/luketaylordev" }, { icon: FaLinkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/imluketaylor/" }, { icon: FaInstagram, name: "Instagram", href: "https://www.instagram.com/luke.taylor816/" }, { icon: FaGoodreads, name: "Goodreads", href: "https://www.goodreads.com/user/show/184640923-luke-taylor" }];
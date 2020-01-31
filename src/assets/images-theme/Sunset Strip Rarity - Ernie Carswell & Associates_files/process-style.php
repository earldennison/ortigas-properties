/*
Theme Name: carswellandassociates.com
Theme URI: http://carswellandassociatescom.rs4.aios-staging.com/
Description: AIOS mobile semi-custom theme.
Author: AgentImage
Author URI: http://www.agentimage.com
Version: 1.4.9
Tags: one-column, two-columns, right-sidebar, custom-menu, full-width-template, sticky-post
License: Proprietary
License URI: http://www.agentimage.com
Template: aios-starter-theme
*/

/*

TABLE OF CONTENTS

1. Custom CSS
2.	IP styles
3. MEDIA QUERIES ARE AUTOMATICALLY REMOVED FROM THIS FILE, they must be placed in style-media-queries.css
  
*/

            


/*******************************************************
 *
 * 1. Custom CSS
 *
 *******************************************************/

/* Global */

body{
	font-family: 'PT Sans Narrow', Arial, Helvetica, Georgia, Sans-serif;
	font-size: 18px;
	background: #FFF;
	color: #000000;
	margin: 0;

    /*overflow-x: hidden;*/

    /* Remove the comment from line 85 to 86 if the font issue in safari occurs */
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
}

/*main{
    overflow-x: hidden;
}*/
a:hover, a:link, a:visited, a:focus, a:active, .slick-slide {
    outline: none;
}

a:hover {
    color: #832920;
}

.mob_show {
    display: none!important;
}

/* Use this class when modifing container of bootstrap */
.new-container {
    width: 1450px;
    max-width: 100%;
}

/*fixed header*/
header.header-wrapper.sticking {
    background: rgba(0,0,0,0.8);
}
    .sticking .header-inner:before {
        opacity: 1;
    }


/*transition*/
header.header-wrapper,
#menu-toggle span i,
.header-inner:before {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}

/*header*/
header.header-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 102;
    
}
    header.header-wrapper .custom-container {
        position: initial;
    }
    .header-inner {
        /*max-width: 1600px;*/
        
        /*padding: 0 128px;*/
        /*margin: 0 auto;*/
        padding: 28px 20px 18px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        position: relative;
    }
        .header-inner:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: -2000px;
            bottom: 0;
            background: #000;
            z-index: -1;
            opacity: 0;
        }
        .header-logo-left {
            /*width: 18.75%;*/
            width: 20%;
        }
            .header-logo-left a {
                display: block;
                position: relative;
            }
            .header-logo-left img {
                max-width: 100%;
                -webkit-transition: all 0.3s ease-in-out;
                -moz-transition: all 0.3s ease-in-out;
                -ms-transition: all 0.3s ease-in-out;
                -o-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
            }
                .header-logo-left img.default_logo {
                    opacity: 1;
                }
                .header-logo-left img.hovered_logo {
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .header-logo-left a:hover img.default_logo {
                    opacity: 0;
                    position: absolute;
                }
                .header-logo-left a:hover img.hovered_logo {
                    opacity: 1;
                    position: relative;
                }

        .header-logo-right {
            padding-right: 3px;
            /*width: 14.807%;*/
            width: 15%;
            text-align: right;
        }
            .header-logo-right img {
                max-width: 100%;
            }

        .header-navs {
            width: 65%;
            text-align: center;
        }
            #nav li {
                position:relative;                
            }
            #nav > li {
                display: inline-block;
                margin: 0 7px 0;
				padding: 8px;
				box-sizing: border-box;
            }
			#nav > li:hover {
				/*background-color: rgba(0,0,0,0.85);*/
                background-color: rgba(222,191,137,0.85);
			}
                #nav li a {
                    font-size: 16px;                                        
                    color: #fff;
                    display: block;
                }
                #nav > li > a {
                    letter-spacing: .1em;
                    font-weight: normal;
                    text-transform: uppercase;
                    padding: 8px 0;
                }
                #nav > li > .sub-menu {
                    left: 50%;
                    transform: translateX(-50%) translateY(-10px);
                }
                #nav .sub-menu {
                    list-style: none outside none;
                    margin: 0;
                    /*display: none;*/
                    pointer-events: none;
                    opacity: 0;
                    padding: 8px 0 0;
                    position: absolute;
                    width:100%;
                    min-width:180px;
                    transform: translateY(-10px);
                    transition: all .3s ease;
                }
                    #nav .sub-menu a {
                        color: #9d9d9d;
                        display: block;
                        padding: 10px;
                        font-size: 15px;
                        letter-spacing: .05em;
                        transition: all .3s ease;
                        background: rgba(0,0,0,0.85);
                    }
                        #nav .sub-menu li:hover > a {
                            background: #debf89;
                            color: #000000;
                        }
                        #nav .sub-menu .sub-menu {
                            margin-left: 100%;
                            top:0;
                        }
                            #nav li:hover > .sub-menu {
                                transform: translateY(0);
                                pointer-events: all;
                                opacity: 1;
                            }
                            #nav > li:hover > .sub-menu {
                                transform: translateX(-50%) translateY(0);
                                pointer-events: all;
                                opacity: 1;
                            }
                            #nav .sub-menu li {
                                position: relative;
                            }

        .menu-wrap {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
        }
            #menu-toggle {
                width: 90px;
                /*height: 88px;*/
                height: 100%;
                background: #debf89;
                border: 1px solid #debf89;
                font-size: 0;                
                padding-top: 4px;
                outline: none;
                position: relative;
                z-index: 3;
                padding: 4px 6px 1px;
            }
                #menu-toggle span {
                    display: block;
                    font-weight: 700;
                    font-size: 12px;
                    letter-spacing: .2em;
                    text-transform: uppercase;
                    line-height: 7px;
                }
                    #menu-toggle span i {
                        display: block;
                        margin: 0 auto 6px;
                        width: 34px;
                        height: 2px;
                        background: #000;
                        transition-duration: .2s;
                    }
					
					.safari-true #menu-toggle span i {
                        height: 3px;
                    }
                    #menu-toggle span i:nth-child(2) {
                        transform-origin: right;
                    }
                        #menu-toggle.active span i:first-child {
                            transform: translate(-5px,-5px) rotate(-43deg);
                            transform-origin: top right;
                        }
                        #menu-toggle.active span i:nth-child(2) {
                            transform: scaleX(0);
                        }
                        #menu-toggle.active span i:nth-child(3) {
                            transform: translate(-5px,2px) rotate(43deg);
                            transform-origin: bottom right;
                        }

                #menu-toggle span strong {
                    display: block;
                    height: 8px;
                    font-weight: 400;
                }

                #menu-toggle:active {
                    padding: 4px 6px 1px;
                }

            .active ~ .menu-dropdown {
                -webkit-transform: translateX(0%);
                    -ms-transform: translateX(0%);
                        transform: translateX(0%);
            }
            .menu-dropdown {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                max-width: 785px;
                width: 100%;
                z-index: 2;
                background: rgba(0,0,0,.85);
                -webkit-transform: translateX(100%);
                -ms-transform: translateX(100%);
                transform: translateX(100%);
                -webkit-transition: all 500ms cubic-bezier(0.770, 0.000, 0.175, 1.000); 
                   -moz-transition: all 500ms cubic-bezier(0.770, 0.000, 0.175, 1.000); 
                     -o-transition: all 500ms cubic-bezier(0.770, 0.000, 0.175, 1.000); 
                        transition: all 500ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
                will-change: transform;
            }
                .menu-inner {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    padding-top: 15.9%;
                    padding-right: 8%; 
                    position: relative;
                }

.menu-inner::before {
    content:''; 
    background: url(images/eca-logo-bg.png) no-repeat center; 
    width: 427px; 
    height: 221px; 
    position: absolute; 
    z-index: 0;
    top: 475px;
    left: 265px;
}

                    .menu-navs {
                        display: flex;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        max-width: 526px;
                        width: 100%;
                        margin: 0 auto;
                        max-height: 100%;
                        overflow-x: hidden;
                        overflow-y: auto; 
                        position: relative;
                    }
                        .menu-navs ul.aios-split-nav {
                            width: 50%;
                        }
                        #menu_nav {
                            display: flex;
                            flex-wrap: wrap;
                            max-width: 526px;
                        }
                            #menu_nav > li,
                            .menu_nav > li {
                                width: 50%;
                                margin-bottom: 20px;
                                min-height: 110px;
                            }
                            .menu_nav > li {
                                width: initial;
                            }
                                #menu_nav > li > a,
                                .menu_nav > li > a {
                                    font-size: 24px;
                                    letter-spacing: .2em;
                                    text-transform: uppercase;
                                    color: #fff;
                                    display: inline-block;
                                    margin-bottom: 11px;
                                }
                                #menu_nav .sub-menu a,
                                .menu_nav .sub-menu a {
                                    font-size: 15px;
                                    letter-spacing: .05em;
                                    line-height: 20px;
                                    color: #9d9d9d;
                                }
                                    #menu_nav .sub-menu a:hover,
                                    .menu_nav .sub-menu a:hover {
                                        /*color: #fff;*/
                                        color: #debf89;
                                    }


                                    .menu-dropdown li a:hover {
                                        color: #debf89;
                                    }

                    .menu-contact-info {
                        display: none;
                    }
                    .menu_nav .menu-contact-info {
                        display: block;
                    }
                        .menu-contact {
                            font-size: 14px;
                            line-height: 18px;
                            letter-spacing: .05em;
                            color: #fff;
                            position: relative;
                            padding-left: 25px;
                            margin-bottom: 2px;
                        }
                            .menu-contact a {
                                color: #fff;
                            }
                            .menu-contact i {
                                color: #debf89;
                                position: absolute;
                                left: 3px; 
                            }
                            .menu-contact i.ai-font-phone {
                                font-size: 9px;
                                top: 6px;
                            }
                            .menu-contact i.ai-font-location-c {
                                font-size: 13px;
                                top: 3px;                                
                            }
                        .menu-smi.smi-list {
/*                             margin-top: 14px;
position: absolute;
right: 240px;
bottom: 105px; */

    margin-top: 14px;
    /*position: absolute;*/
    position: relative;
    left: 0;
	bottom: 0;

                        }
                            .menu-smi.smi-list a {
                                display: inline-block;
                                vertical-align: top;
                                margin: 0 10px 0 0;
                                background: rgba(255,255,255,.19);
                                color: #debf89;
                                width: 33px;
                                height: 33px;
                                line-height: 33px;
                                font-size: 16px;
                            }
                                 .menu-smi.smi-list a:hover {
                                    background: #debf89;
                                    color: #000;
                                 }

            .menu-bg {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: none;
                z-index: 1;
            }
            .active ~ .menu-bg {
                display: block;
            }



ul.group-links.menu_nav > li {
    min-height: initial;
    margin-bottom: 0;
    line-height: 1;
}


/*section 1*/
section.section-1 {
    background: url(images/bg-parallax-a.jpg) fixed top center/100% no-repeat;
    overflow: hidden;    
}
    .section-1-inner {
        background: rgba(255,255,255,.8);
        padding-left: 90px;
        position: relative;
    }
        .section-1-inner:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 514px;
            background: url(images/overlay-slide.png) bottom left repeat-x;
        }
        .slideshow-smi {
            position: fixed;
            width: 41px;
            top: 50%;
            transform: translateY(-35%);
            left: 23px;
            z-index: 99;
        }
            .smi-list a {
                display: block;
                width: 41px;
                height: 41px;
                border-radius: 50%;
                font-size: 20px;
                color: #fff;
                background: rgba(0,0,0,.25);
                text-align: center;
                margin: 0 auto 16px;
                line-height: 41px;
                transition: all .3s ease;
            }
                .slideshow-smi a:last-child {
                    margin-bottom: 0;
                }
				
			.slideshow-smi a {
                display: block;
                width: 41px;
                height: 41px;
                border-radius: 50%;
                font-size: 20px;
                color: #000;
                background: #debf89;
                text-align: center;
                margin: 0 auto 16px;
                line-height: 41px;
                transition: all .3s ease;
            }
                .slideshow-smi a:hover {
                    background: rgba(0,0,0,.25);
                    color: #debf89;
                }
        #slideshow {
            position: relative;
            overflow: hidden;
        }            
            .accent-line {
                position: absolute;
                z-index: 1;
                background: rgba(255,255,255,.29);
            }
                .accent-line.accent-red {
                    background: rgba(131,41,32,.29);
                }
                .accent-line-dot {
                    width: 18px;
                    height: 18px;
                    display: block;
                    position: absolute;
                    top: -9px;
                    left: -9px;
                }
                .accent-line-dot:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 1px solid rgba(255,255,255,.29);
                }
                    .accent-red .accent-line-dot:before {
                        border: 1px solid rgba(131,41,32,.29);
                    }
                .accent-line-dot:after {
                    content: '';
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #fff;
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                }
                    .accent-red .accent-line-dot:after {
                        background: #832920;
                    }

        .slideshow-overlay {
            position: absolute;
            /*bottom: 189px;*/
            bottom: 0;
            padding-left: 140px;
            /*padding-bottom: 189px;*/
            padding-bottom: 11.813%;
            overflow: visible;
        }
            .slideshow-overlay .accent-line {
                bottom: 0;
                left: 61px;
                /*height: 375px;*/
                height: 98.5%;
                width: 1px;
                background: rgba(255,255,255,.29);
            }
                .slideshow-overlay .accent-line-dot {
                    left: -9px;
                    top: -11px;
                }

            .slideshow-tagline {
                
            }
                .slideshow-tagline h2 {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 80px;
                    line-height: 1;
                    letter-spacing: .02em;
                    color: #fff;
                    text-transform: uppercase;
                    font-weight: 400;
                    margin-bottom: 30px;
                }
                    .slideshow-tagline h2 span {
                        display: block;
                        font-size: 24px;
                        letter-spacing: .4em;
                        margin-bottom: 5px;
                    }
                a.btn-a,
                .btn-a {
                    display: inline-block;
                    font-weight: 700;
                    font-size: 14px;
                    text-align: center;
                    letter-spacing: .26em;
                    color: #fff;
                    text-transform: uppercase;
                    padding: 17.5px 13px;
                    border: 2px solid #fff;
                    transition: color .3s ease, background .3s ease;
                }
                    a.btn-a span,
                    .btn-a span {
                        display: inline-block;
                    }
                        a.btn-a span:before, a.btn-a span:after,
                        .btn-a span:before, .btn-a span:after {
                            content: '';
                            display: inline-block;
                            vertical-align: middle;
                            width: 11px;
                            height: 1px;
                            background: #fff;
                            transition: all .3s ease;
                        }
						
						.safari-true a.btn-a span:before, .safari-true a.btn-a span:after,
                        .safari-true .btn-a span:before, .safari-true .btn-a span:after {
                            height: 3px;
                        }
						
                        a.btn-a span:before,
                        .btn-a span:before {
                            margin-right: 8px;
                        }
                        a.btn-a span:after,
                        .btn-a span:after {
                            margin-left: 4px;
                        }
                    a.btn-a:hover,
                    .btn-a:hover {
                        background: #debf89;
                        border-color: #debf89;
                        color: #000;
                    }
                        a.btn-a:hover span:before, a.btn-a:hover span:after,
                        .btn-a:hover span:before, .btn-a:hover span:after {
                            background: #000;
                        }

                a.btn-a-rev,
                .btn-a-rev {
                    border-color: #b4b4b4;
                    color: #000;
                }
                    a.btn-a-rev span:before, a.btn-a-rev span:after,
                    .btn-a-rev span:before, .btn-a-rev span:after {
                        background: #b4b4b4;
                    }

/*section 2*/
section.section-2 {
    overflow: hidden;
}
    #featured-properties {
        padding: 71px 0 0;
    }
        .custom-container {
            padding: 0 15px;
            max-width: 100%;
            width: 1450px;
            margin: 0 auto;
            position: relative;
        }
            #featured-properties .section-parallax-a {
                height: 875px;                
                left: calc( 100% - 131px );
                bottom: 0;
            }
            .section-parralax-flow-right {
                right: calc( (1450px - 100vw) / 2 );
            }
            .section-parralax-flow-left {
                /*left: calc( (1450px - 100vw) / 2 );*/
                left: -2000px;
            }
            .section-parallax-a {
                position: absolute;
                background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
            }
                .section-parallax-a:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background: #070707;
                    opacity: .8
                }
                .section-parallax-a.section-parralax-white:before {
                    background: #fff;
                }
            .fp-title {
                /*padding-left: 139px;*/
                padding-left: 9.79%;
                padding-top: 14px;
                position: relative;
                z-index: 2;
                width: 55%;
            }
                .fp-title .accent-line {
                    right: 95.4%;
                    top: 90px;
                    width: 1000px;
                    height: 1px;
                }
                    .fp-title .accent-line-dot {
                        right: -9px;
                        top: -9px;
                        left: initial;
                    }
                .fp-title .section-title {
                    margin-bottom: 22px;
                }
                .section-title,
                #content .section-title {
                    font-family: 'Cormorant Garamond', serif;
                    text-transform: uppercase;
                    font-weight: 400;
                    font-size: 80px;
                    letter-spacing: .034em;
                    color: #832920;
                    line-height: 1;
                }
                    .section-title span {
                        display: block;
                        letter-spacing: .4em;
                        font-size: 24px;
                        color: #000;
                        margin-bottom: 10px;
                    }
                .fp-title p {
                    font-size: 19px;
                    line-height: 28px;
                    letter-spacing: .05em;
                    color: #838383;
                    max-width: 600px;
                }

            .fp-list {
                font-size: 0;
                margin-top: -206px;
                margin-left: -1px;
                margin-right: -1px;
            }
                .fp-list:before {
                    content: '';
                    position: absolute;
                    top: 1px;
                    bottom: 1px;
                    right: 1px;
                    left: 0;
                    background: #fff;
                }
                .fp:nth-child(1) {
                    /*width: 795px;*/
                    width: 55.908%!important;
                }
                .fp:nth-child(2) {
                    /*width: 626px;*/
                    width: 44.092%!important;
                }
                    .fp:nth-child(2) .fp-img canvas {
                        height: 784px;
                    }
                .fp:nth-child(3) {
                    /*width: 502px;*/
                    width: 35.303%!important;
                }
                .fp:nth-child(4) {
                    /*width: 919px;*/
                    width: 64.697%!important;
                }
                .fp {
                    display: inline-block;
                    vertical-align: bottom;
                    padding: 1px;
                }
                    .fp a {
                        display: block;
                        overflow: hidden;
                        position: relative;
                    }
                        .fp-img {
                            position: relative;
                        }
                            .fp-img:before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                background: rgba(0,0,0,.2);
                                z-index: 1;
                            }
                            .fp-img canvas {
                                background-size: cover;
                                background-position: center;
                                width: 100%;
                                height: 497px;
                                transition: all .4s ease;
                                display: block;
                            }
                                .fp a:hover .fp-img canvas {
                                    transform: scale(1.1);
                                    -webkit-filter: grayscale(1);
                                            filter: grayscale(1);
                                }
                            .fp-status {
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                margin: 0 auto;
                                background: #debf89;
                                padding: 32.5px 0;
                                width: 183px;
                                font-size: 20px;
                                line-height: 1;
                                letter-spacing: .1em;
                                color: #191919;
                                text-transform: uppercase;
                                z-index: 1;                                
                                text-align: center;
                                -webkit-transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
                                -o-transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
                                transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
                            }

                            .single-aios-agents .fp a:hover .fp-status{
                                opacity: 0;
                            }

                        .fp-details {
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: -83px;
                            text-align: center;
                            z-index: 1;
                            transition: all .3s ease;
                        }
                        .fp-details-content-box {
                            background: rgba(0,0,0,.7);
                            width: 80%;
                            margin: 0 auto;
                            transition: all .325s ease-in-out;
                        }
                        .page-template-template-pre-market a:hover .fp-details-content-box {
                            padding-top: 20px;
                        }
                            .fp a:hover .fp-details {
                                bottom: 50%;
                                transform: translateY(48.8%);
                            }
                            .fp-address {
                                font-family: 'Cormorant Garamond', serif;
                                /*font-size: 24px;
                                letter-spacing: .02em;*/
                                font-size: 20px;
                                letter-spacing: 0;
                                color: #fff;
                                text-transform: uppercase;
                                /*transform: translateY(135%);*/
                                transform: translateY(100%);

                            }
                                .fp a:hover .fp-address {
                                    transform: translateY(0);
                                }
                                .fp-address span {
                                    margin: 0 7px;
                                }
                            .fp-ammenities {
                                font-size: 15px;
                                letter-spacing: .1em;
                                color: #fff;
                                padding: 13px 0 29px;
                                opacity: 0;
                            }
                                .fp a:hover .fp-ammenities {
                                    opacity: 1;
                                }
                                .fp-ammenities span {
                                    margin: 0 5px;
                                }
                            .fp-price {
                                display: block;
                                width: 257px;
                                height: 84px;
                                margin: 0 auto;
                                background: rgba(0,0,0,.7);
                                font-size: 20px;
                                letter-spacing: .1em;
                                line-height: 84px;
                                color: #fff;
                            }
                            .page-template-template-pre-market  .fp-details-content-box {
                                padding: 20px 0;
                                transition: all 0.4s ease-in-out;
                            }
                            .page-template-template-pre-market .fp-address {
                                transform: none;
                            }
                            .page-template-template-pre-market .fp-price {
                                background: transparent;
                                line-height: 2;
                                height: auto;
                            }
                            .page-template-template-pre-market .fp-ammenities {
                                padding: 0;
                            }
                            .page-template-template-pre-market .fp-details {
                                bottom: -125px;
                            }
                            .fp-btn.btn-a {
                                width: 257px;
                                height: 83px;
                                padding: 0;
                                line-height: 83px;
                                background: #debf89;
                                border-color: #debf89;
                                color: #000;
                                position: relative;
                                left: 0;
                                right: 0;
                                margin: 0 auto;
                                top: 100%;
                            }
                                .fp-btn.btn-a span:before,
                                .fp-btn.btn-a span:after {
                                    background: #000;
                                }
                    .fp-details,
                    .fp-address,
                    .fp-ammenities {
                        -webkit-transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
                        -o-transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
                        transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
                    }

                    /*.fp:nth-child(3) .fp-details .fp-address,
                    .fp:nth-child(2) .fp-details .fp-address {
                        transform: translateY(70%);
                        width: 90%;
                        margin: 0 auto;
                    }*/
            .fp-arrows {
                /*width: 350px;*/
                width: 482px;
                max-width: 100%;
                margin-top: -1px;
                margin-left: auto;
                margin-right: 116px;
                background: #debf89;
                /*padding: 38px 0 37px;*/
                padding: 23px 0 23px;
                text-align: center;
            }
                em.fp-arrow-line,
                .custom-button-line {
                    display: inline-block;
                    vertical-align: middle;
                    width: 1px;
                    height: 20px;
                    background: rgba(163,132,79,.54);
                }
                .fp-arrows button,
                .custom-buttons button {
                    background: none;
                    border: none;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: .26em;
                    color: #000;
                    outline: none;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    transition: all .3s ease;
                    opacity: 0.6;
                }

                .fp-arrows button:hover,
                .custom-buttons button:hover{
                    opacity: 1;
                }
                    .fp-arrows button i,
                    .custom-buttons button i {
                        display: inline-block;
                        width: 23px;
                        height: 23px;
                        border-radius: 50%;
                        border: 1px solid rgba(131,41,32,.29);
                        font-size: 11px;
                        color: #832920;
                        text-align: center;
                        line-height: 22px;
                        font-style: normal!important;
                    }
                        .fp-prev i,
                        .custom-button-prev i {
                            margin-right: 8px;
                            padding-left: 2px;
                        }
                        .fp-next i,
                        .custom-button-next i {
                            margin-left: 6px;
                            padding-left: 4px;
                        }




/*section 3*/
section.section-3 {
    overflow: hidden;
}
    #about-ernie {
        padding-bottom: 147px;
    }
        #about-ernie .custom-container {

        }
            #about-ernie .custom-container > .section-parallax-a {
                top: 0;
                bottom: 0;
                left: calc( 100% - 131px );
            }
        .aec-wrapper {
            font-size: 0;
            padding-top: 58px;
            padding-left: 70px;
            padding-right: 116px;
            position: relative;
        }

.aec-wrapper:before {
    content: '';
    position: absolute;
        top: 5px;
    /*right: 10px;*/
    right: 116px;
    opacity: .075;
    z-index: -1;
    width: 632px;
    height: 333px;
    background: url(images/welcome-watermark.png) center/cover no-repeat;
}
            .aec-title {
                display: inline-block;
                position: relative;
                margin-bottom: 121px;
            }
                .aec-title .accent-line {
                    left: 78.9%;
                    width: 2000px;
                    height: 1px;
                    top: 65px;
                }
                    .aec-title .accent-line-dot {
                        top: -9px;
                        left: -9px;
                    }
                .aec-wrapper .section-title {
                    font-size: 120px;
                    letter-spacing: .02em;
                    line-height: .73;
                    display: inline-block;
                    margin-left: 70px;
                }
                    .aec-wrapper .section-title strong {
                        display: block;
                        font-weight: 400;
                        font-size: 80px;
                        letter-spacing: .08em;
                        color: #000;
                        padding-left: 77px;
                        margin-top: 5px;
                    }
            .aec-row {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                overflow: visible!important;
            }
            .aec-agent {
                /*width: 515px;*/
                width: 41.735%;
                display: inline-block;
                vertical-align: top;
                position: relative;
                margin-top: 62px;                
            }
                .aec-agent .section-parralax-flow-left {
                    /*top: -50px;*/
                    bottom: 0;
                    /*right: 40px;*/
                    top: -155px;
                    right: 0;
                }
                .aec-agent .section-parralax-flow-left:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 93px;
                    width: 460px;
                    background: #fff;
                }
                .aec-agent img {
                    /*width: 100%;*/
                    width: 723px;
                    position: absolute;
					bottom:0;
                    right: -48px;
                    z-index: 1;
                }

            .aec-text {
                width: 58.265%;
                display: inline-block;
                vertical-align: top;
                margin-top: -2px;
                /*padding-left: 82px;*/
                padding-left: 6.65%;
                padding-right: 40px;
                /*padding-bottom: 131px;*/
                padding-bottom: 193px;
                position: relative;
            }
                .aec-text p {
                    font-size: 19px;
                    line-height: 28px;
                    letter-spacing: .05em;
                    color: #838383;
                    margin-bottom: 28px;
                }
                .aec-text a.btn-a.btn-a-rev {
                    margin: 25px 0;
                    padding: 17.5px 17px;
                }

                .aec-text:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 82px;
                    width: 2000px;
                    height: 131px;
                    background: #debf89;
                }

section.section-4 {
    overflow: hidden;
    text-align: center;
}
    #meet-the-team {
        position: relative;
        display: inline-block;
    }
        .mtt-map {
            position: relative;
            font-size: 0;
            background: url(/wp-content/themes/carswellandassociates.com/images/team/banner-meet-the-team-bg.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
            .mtt-map canvas {
                width: 100%;
                display: block;
            }
            .mtt-map-wrap {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
            }
                .mtt-map-inner {
                    display: inline-block;
                    position: relative;
                }
            .mtt-map > img {
                width: 100%;
                transition: all .3s ease;
            }
            .mtt-map img.mtt-invisible, 
            .mtt-map img.mtt-main-image {
                /*width: 100%;*/
                transition: all .3s ease;
            }
            .mtt-map img.mtt-invisible {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 2;
            }
            .mtt-map:hover img.mtt-main-image {
                -webkit-filter: grayscale(100);
                filter: grayscale(100);
            }
            .mtt-hovers {
                position: absolute;
                top: 0;
                left: 0;
            }
                .mtt-details {
                    /*position: absolute;
                    top: 0;
                    left: 0;*/
                    background: rgba(222,191,137,.95);
                    text-align: center;
                    width: 262px;
                    padding: 28px 15px 27px;
                    z-index: 2;
                    position: relative;
                }
				.agent-title {
					font-size: 15px;
				}
                    .mtt-det-name {
                        font-family: 'Cormorant Garamond', serif;
                        display: inline-block;
                        text-transform: uppercase;
                        position: relative;
                        font-size: 20px;
                        letter-spacing: .05em;
                        color: #000;
                        position: relative;
                        padding: 0 0 15px;
                        margin-bottom: 25px;
                    }
                        .mtt-det-name .accent-line {
                            width: 270px;
                            height: 1px;
                            left: -7px;
                            background: #b09361;
                            bottom: 0;
                        }
                            .mtt-det-name .accent-line-dot {
                                right: -9px;
                                top: -9px; 
                                left: initial;                               
                            }
                            .mtt-det-name .accent-line-dot:before {
                                border-color: rgba(222,191,137,.29);
                            }
                            .mtt-det-name .accent-line-dot:after {
                                background: #debf89;
                            }
                    .mtt-det-phone,
                    .mtt-det-email {
                        font-size: 18px;
                        letter-spacing: .05em;
                        line-height: 1;
                        color: #684f26;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .mtt-det-email {
                        font-size: 13px;
                    }
                        .mtt-det-phone a:hover, 
                        .mtt-det-email a:hover {
                            color: #fff;
                        }
                        .mtt-det-email i.ai-font-envelope-f {
                            font-style: normal!important;
                        }
                    em.mtt-det-line {
                        display: inline-block;
                        vertical-align: middle;
                        width: 1px;
                        height: 19px;
                        background: #b09361;
                        margin: 0 23px;
                    }

                .mtt-hover.active {
                    opacity: 1;
                    pointer-events: all;
                    visibility: visible;
                }
                .mtt-hover {
                    position: absolute;
                    opacity: 0;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    transition: all .3s ease;
                    pointer-events: none;
                    visibility: hidden;
                    z-index: 2;
                    padding-right: 60px;
                }
                .mtt-hover-reverse {
                    padding-right: 0;
                    padding-left: 60px;
                }
                .mtt-hover-reverse .accent-line {
                    right: -7px;
                    left: initial;
                }
                    .mtt-hover-reverse .accent-line-dot {
                        right: initial;
                        left: -9px;
                    }
                .mtt-hover img {
                    position: absolute;
                    pointer-events: none;
                }
                .mtt-hover.mtt-agent-1 {
                    top: 246px;
                    left: 418px;
                }
                    .mtt-hover.mtt-agent-1 img {
                        top: -108px;
                        right: -125px;
                    }
                .mtt-hover.mtt-agent-2 {
                    top: 155px;
                    left: 641px;
                }
                    .mtt-hover.mtt-agent-2 img {
                        top: -48px;
                        right: -50px;
                    }
                    .mtt-agent-2 .mtt-details {
                        width: 296px;
                    }
                        .mtt-agent-2 .mtt-det-name .accent-line {
                            left: 0;
                            width: 299px;
                        }
                .mtt-hover.mtt-agent-3 {
                    top: 219px;
                    left: 556px;
                }
                    .mtt-hover.mtt-agent-3 img {
                        top: -105px;
                        right: -102px;
                    }
                    .mtt-agent-3 .mtt-det-name .accent-line {
                        left: -26px;
                    }

                .mtt-hover.mtt-agent-4 {
                    top: 285px;
                    left: 716px;
                }
                    .mtt-hover.mtt-agent-4 img {
                        top: -50px;
                        right: -124px;
                    }
                    .mtt-agent-4 .accent-line.accent-red {
                        width: 269px;
                        left: -20px;
                    }
                .mtt-hover.mtt-agent-5 {
                    top: 154px;
                    left: 767px;
                }
                    .mtt-hover.mtt-agent-5 img {
                        top: -17px;
                        right: -80px;
                    }
                    .mtt-agent-5 .accent-line.accent-red {
                        width: 283px;
                        left: 0;
                    }
                .mtt-hover.mtt-agent-6 {
                    top: 214px;
                    left: 828px;
                }
                    .mtt-hover.mtt-agent-6 img {
                        top: -42px;
                        right: -79px;
                    }
                    .mtt-agent-6 .mtt-details {
                        width: 282px;
                    }
                        .mtt-agent-6 .accent-line.accent-red {
                            width: 306px;
                            left: 0;
                        }
                .mtt-hover.mtt-agent-7 {
                    top: 175px;
                    left: 975px;
                }
                    .mtt-hover.mtt-agent-7 img {
                        top: -58px;
                        right: -95px;
                    }
                .mtt-hover.mtt-agent-8 {
                    top: 300px;
                    left: 1039px;
                }
                    .mtt-hover.mtt-agent-8 img {
                        top: -40px;
                        right: -158px;
                    }
                .mtt-hover.mtt-agent-9 {
                    top: 181px;
                    left: 1178px;
                }
                    .mtt-hover.mtt-agent-9 img {
                        top: -51px;
                        right: -86px;
                    }
                    .mtt-agent-9 .accent-line.accent-red {
                        left: -15px;
                    }
                .mtt-hover.mtt-agent-10 {
                    top: 131px;
                    /*left: 748px;*/
                    left: 688px;
                }
                    .mtt-hover.mtt-agent-10 img {
                        top: -45px;
                        left: -37px;
                    }
                    .mtt-agent-10 .accent-line {
                        right: -21px;
                    }
                .mtt-hover.mtt-agent-11 {
                    top: 240px;
                    /*left: 678px;*/
                    left: 618px;
                }
                    .mtt-hover.mtt-agent-11 img {
                        top: -77px;
                        left: -143px;
                    }
                    .mtt-agent-11 .accent-line {
                        right: -22px;
                    }
                .mtt-hover.mtt-agent-12 {
                    top: 160px;
                    /*left: 609px;*/
                    left: 549px;
                }
                    .mtt-hover.mtt-agent-12 img {
                        top: -42px;
                        left: -48px;
                    }
                .mtt-hover.mtt-agent-13 {
                    top: 228px;
                    /*left: 525px;*/
                    left: 465px;
                }   
                    .mtt-hover.mtt-agent-13 img {
                        top: -73px;
                        left: -89px;
                    }
                .mtt-hover.mtt-agent-14 {
                    top: 190px;
                    /*left: 410px;*/
                    left: 350px;
                }
                    .mtt-hover.mtt-agent-14 img {
                        top: -79px;
                        left: -57px;
                    }
                .mtt-hover.mtt-agent-15 {
                    top: 150px;
                    /*left: 303px;*/
                    left: 243px;
                }
                    .mtt-hover.mtt-agent-15 img {
                        top: -37px;
                        left: -83px;
                    }
                .mtt-hover.mtt-agent-16 {
                    top: 300px;
                    /*left: 345px;*/
                    left: 285px;
                }
                    .mtt-hover.mtt-agent-16 img {
                        top: -77px;
                        left: -146px;
                    }
                .mtt-hover.mtt-agent-17 {
                    top: 215px;
                    /*left: 157px;*/
                    left: 97px;
                }
                    .mtt-hover.mtt-agent-17 img {
                        top: -94px;
                        left: -75px;
                    }

                
        .mtt-title {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            max-width: 555px;
            /*width: 785px;*/
            overflow: hidden;
            /*padding: 54px 14.4% 0;*/
            padding: 54px 10.372% 0;
            background: #fff;
            z-index: 3;
        }
            .mtt-title .section-title {
                margin-bottom: 23px;
                letter-spacing: .02em;
            }
            .mtt-title .accent-line {
				display:none;
                height: 1px;
                width: 500px;
                top: 53.5%;
                left: 65.7%;
            }
                .mtt-title .accent-line-dot {
                    top: -9px;
                    left: -9px;
                }

            #meet-the-team a.btn-a-rev {
                padding: 17.5px 19.5px;
            }

/*section 5*/
section.section-5 {
    overflow: hidden;
}
    #why-work-with-us {
        padding: 142px 0 121px;
    }
        .wwwu-wrapper {
            position: relative;
        }
            .wwwu-wrapper:before {
                content: '';
                position: absolute;
                bottom: -121px;
                left: 0;
                top: 100%;
                /*width: 598px;*/
                width: 42.113%;
                background: #debf89;
            }
            .wwwu-wrapper .section-parallax-a {
                top: 110px;
                right: calc(100% - 125px);
                left: -1000px;
                bottom: -121px;
            }
            .wwwu-inner {
                text-align: center;
                background: url(images/bg-wwwu.jpg) center/cover no-repeat;
                position: relative;
                padding: 120px 15px 121px;
            }
                .wwwu-inner:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(36,36,36,.8);
                }
                .wwwu-inner .section-title {
                    text-align: center;
                    color: #fff !important;
                    position: relative;
                    margin-bottom: 80px;
                    margin-bottom: 83px;
                    margin: 0 auto 83px !important;
                }
                    .wwwu-inner .section-title span {
                        color: #fff;
                    }
                .wwwu-stats {
                    position: relative;
                    font-size: 0;
                }
                    .wwwu {
                        display: inline-block;
                        vertical-align: top;
                        font-size: 18px;
                        letter-spacing: .02em;
                        line-height: 24px;
                        text-transform: uppercase;
                        color: #e1e1e1;
                        /*width: 21.2%;*/
                        width: auto;
                        /*padding: 0 30px;*/
                        padding: 0 20px;
                    }
                        .wwwu span {
                            /*font-size: 80px;*/
                            font-size: 75px;
                            line-height: 1;
                            text-transform: initial;
                            display: block;
                            margin-bottom: 24px;
                        }
                            .wwwu span em {
                                font-style: normal !important;
                            }

/*section 6*/
section.section-6 {
    overflow: hidden;
}
    #active-sold-properties {
        padding: 123px 0 0;
        overflow: hidden;
    }
        #active-sold-properties .asp-wrapper {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            overflow: visible;
        }
            .asp-title {
                position: absolute;
                background: #fff;
                right: 0;
                top: 0;
                z-index: 2;
                margin-top: -48px;
                /*padding: 0 226px 80px 85px;*/
                padding: 0 226px 40px 85px;
                text-align: right;
            }
                .asp-title .accent-line {
                    height: 1px;
                    width: 1000px;
                    left: 78.5%;
                    top: 39%;
                }
                    .asp-title .accent-line-dot {
                        top: -9px;
                        left: -9px;
                    }
            .asp-result {
                width: 395px;
                /*width: 24.688%;*/
                padding: 32px 38px 36px;
                background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                position: relative;
            }
                .asp-result:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,.8);
                }
                .asp-result-inner {
                    position: relative;
                    z-index: 1;
                }
                    .asp-result-tab-buttons {
                        position: relative;
                        font-size: 0;
                        margin-bottom: 57px;
                    }
                        .asp-result-tab-buttons:before {
                            content: '';
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 0;
                            bottom: 0;
                            margin: auto;
                            width: 1px;
                            background: #262626;
                            height: 40px;
                        }
                        .asp-result-tab-buttons button {
                            width: 50%;
                            display: inline-block;
                            vertical-align: top;
                            background: none;
                            border: none;
                            border-bottom: 1px solid #262626;
                            font-size: 24px;
                            color: #e1e1e1;
                            text-transform: uppercase;
                            padding: 19px 0;
                            outline: none;
                        }
                        .asp-result-tab-buttons button#asp-result-active.active {
                            border-bottom-color: #debf89;
                            color: #debf89;
                        }
                        .asp-result-tab-buttons button#asp-result-sold.active {
                            border-bottom-color: #832920;
                            color: #832920;
                        }

                    .asp-result-tab {
                        position: relative;
                        height: 334px;
                        margin-bottom: 34px;
                        overflow-x: hidden
                    }
                        .asp-result-tab .simplebar-content {
                            /*padding-bottom: 0!important;*/
                        }
                        .asp-result-tab .simplebar-scrollbar:before {
                            background: #fff;
                        }
                        .asp-result-list {
                            display: none;
                            padding-left: 35px;                      
                        }
                        .asp-result-list.active {
                            display: block;
                        }
                            .asp-result-list li {
                                margin-bottom: 7px;
                            }
                            .asp-result-list li:last-child {
                                margin-bottom: 0;
                            }
                                .asp-result-list li a {
                                    display: inline-block;
                                    position: relative;
                                    font-size: 15px;
                                    letter-spacing: .02em;
                                    color: #fff;
                                    line-height: 24px;
                                    /*padding-left: 28px;*/
                                    padding-left: 20px;
                                }
                                    .asp-result-list li a i {
                                        position: absolute;
                                        width: 14px;
                                        height: 15px;
                                        top: 5px;
                                        left: 0;
                                    }
                                    .asp-result-list li a i.icon-active {
                                        background: url(images/icon-location-active.png) center/100% no-repeat;
                                    }
                                    .asp-result-list li a i.icon-sold {
                                        background: url(images/icon-location-sold.png) center/100% no-repeat;
                                    }

                    .asp-result-filters {
                        padding: 0 0 0 37px;
                    }
                        .asp-result-filters label {
                            display: block;
                            width: 254px;
                            /*height: 53px;*/
                            background: #debf89;
                            font-size: 14px;
                            line-height: 24px;
                            letter-spacing: .02em;
                            color: #000;
                            text-transform: uppercase;
                            margin-bottom: 7px;
                            padding: 16px 0 13px 54px;
                            position: relative;
                            cursor: pointer;
                            user-select: none;
                            transition: all .3s ease;
                        }

                        .asp-result-filters label:hover{
                            color: #fff;
                        }
                            .asp-result-filters label input {
                                display: none;
                            }
                            span.asp-result-filter-dot {
                                position: absolute;
                                width: 15px;
                                height: 15px;
                                border-radius: 50%;
                                background: #f5f5f5;
                                left: 21px;
                                top: 0;
                                bottom: 0;
                                margin: auto;
                                box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.54) inset;
                                transition: all .3s ease;
                            }
                                input:checked + span.asp-result-filter-dot {
                                    background: #832920;
                                }

            .asp-map {
                width: calc(100% - 395px);
            }
                .map_canvas {
                    height: 100%;
                    position: relative;
                }
                    .map_canvas canvas {
                        width: 100%;
                        height: 676px;
                        display: block;
                        
                    }
                    .placeholder-map {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: url(images/bg-map-placeholder.jpg) center/cover no-repeat;
                    }
                        .placeholder-map:before,
                        .placeholder-map:after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            transition: opacity .3s ease;                    
                        }
                        .placeholder-map:before {
                            background: url(images/bg-map-placeholder-pin-active.png) center/cover no-repeat;
                        }
                        .placeholder-map:after {
                            background: url(images/bg-map-placeholder-pin-sold.png) center/cover no-repeat;
                        }
                        .placeholder-map.asp-result-filter-active:before, 
                        .placeholder-map.asp-result-filter-sold:after {
                            /*display: none;*/
                            opacity: 0;
                        }
                        .placeholder-map.asp-result-filter-active.asp-result-filter-sold:before, 
                        .placeholder-map.asp-result-filter-active.asp-result-filter-sold:after {
                            /*display: block;*/
                            opacity: 1;
                        }

/*section 7*/
section.section-7 {
    overflow: hidden;
}
    #in-the-media {
        padding: 134px 0 125px;
    }
        .itm-wrapper {
            padding: 0 9.86%;
            position: relative;
            text-align: right;
        }
            .itm-wrapper .section-parralax-white {
                right: 100%;
                top: -39px;
                bottom: 0;
            }
            .itm-wrapper .section-parallax-a.section-parralax-flow-right {
                /*left: 100%;*/
                left: 208.3%;
                right: -2000px;
                top: 40.3%;
                bottom: -125px;
            }
            .itm-title {
                display: inline-block;
                position: relative;
            }
                .itm-title .accent-line {
                    width: 100vw;
                    right: 127%;
                    top: 65%;
                    height: 1px;
                }
                    .itm-title .accent-line-dot {
                        right: -9px;
                        top: -9px;
                        left: initial;
                    }
                .itm-title .section-title {
                    letter-spacing: .02em;
                }
                    .itm-title .section-title span {
                        letter-spacing: .4em;
                    }


            .itm-row {
                position: relative;
                text-align: left;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
            }
                .itm-row:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: -16px;
                    top: calc(100% - 92px);
                    bottom: -125px;
                    background: #debf89;
                    z-index: 1;
                }
                .itm-row:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: -16px;
                    bottom: 0;
                    background: #fff;
                }
                .itm-magazine {
                    padding: 64px 0 0;
                    position: relative;
                    width: 48.685%;
                    z-index: 1;
                }
                    .itm-magazine img {
                        display: block;
                        position: relative;
                        z-index: 1;
                        max-width: 100%;
                    }

                .itm-media-list {
                    width: 51.315%;
                    padding: 64px 50px 0 65px;
                    /*background: #fff;*/
                    position: relative;
                    z-index: 1;
                }
                    .itm-media-list:before {
                        
                    }
                    .itm-media {
                        display: block!important;
                        width: 390px!important;
                        max-width: 90%;
                        height: 181px;
                        background: #000;
                        text-align: center;
                        position: relative;
                        margin: 0 auto 4px;
                        background-size: cover;
                        background-position: center;
                    }                    
                        .itm-media img {
                            max-width: 90%;
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 0;
                            bottom: 0;
                            margin: auto;
                            transition: opacity .3s ease;
                        }
                        .itm-media img.itm-media-hover,
                        .itm-media:hover img {
                            opacity: 0;
                        }
                        .itm-media:hover img.itm-media-hover {
                            opacity: 1;
                        }
                    .itm-media:nth-child(odd) {
                        margin-right: 0;
                        background-image: url(images/bg-itm-1.jpg);
                    }
                    .itm-media:nth-child(odd) ~ .itm-media:nth-child(odd) {
                        background-image: url(images/bg-itm-2.jpg);
                    }
                    .itm-media:nth-child(even) {
                        margin-left: 0;                        
                    }
                    .itm-media:last-child {
                        margin-bottom: 0;
                    }

            .itm-media-buttons {
                position: absolute;
                right: 44px;
                left: 0;
                z-index: 1;
                top: 100%;
                text-align: right;
                margin-top: 35px;
            }

/*section 8*/
section.section-8 {
    overflow: hidden;
}
    #testimonials {
        padding: 126px 0 121px;
    }
        .testi-wrapper {

        }
            .testi-title {
                display: inline-block;
                position: relative;
                padding-left: 9.86%;
            }
                .testi-title .accent-line {
                    height: 1px;
                    left: 112.7%;
                    top: 67.5%;
                    width: 100vw;
                }
                    .testi-title .accent-line-dot {
                        top: -9px;
                        left: -9px;
                    }
                .testi-title h2.section-title {
                    letter-spacing: .02em;
                }
                    .testi-title h2.section-title span {
                        letter-spacing: .4em;
                    }
            .testi-box {
                min-height: 590px;
                background: url(images/bg-testi.jpg) center/cover no-repeat;
                position: relative;
                margin-top: 55px;
                text-align: center;
                padding: 83px 6.198% 62px;
            }
                .testi-box .section-parallax-a.section-parralax-flow-right {
                    left: calc(100% - 124px);
                    right: -2000px;
                    top: 110px;
                    top: 18.5%;
                    bottom: -121px;
                    z-index: -1;
                }
                .testi-box:after {
                    content: '';
                    position: absolute;
                    right: 124px;
                    bottom: -121px;
                    top: 83.8%;
                    width: 100vw;
                    background: #debf89;
                    z-index: -1;
                }
                .testi-box:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(36,36,36,.8);
                }
                .testi-list {
                    position: relative;
                    z-index: 1;
                    color: #fff;
                    font-size: 0;
                    margin-bottom: 41px;
                }
                    .testi-list:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                        width: 1px;
                        background: #777777;
                    }
                    .testi {
                        font-size: 18px;
                        letter-spacing: .05em;
                        line-height: 28px;
                        color: #e1e1e1;
                        width: 50%;
                        display: inline-block;
                        text-align: left;
                        padding: 0 51px 29px;
                    }
                        .testi-qoute {
                            display: block;
                            font-family: 'Cormorant Garamond', serif;
                            font-size: 188.72px;
                            line-height: 120px;
                            height: 45px;
                            color: #ede0cf;
                            font-style: normal;
                            margin-bottom: 25px;
                        }
                            .testi-qoute:before {
                                content: '\201C';
                            }
                        .testi-date {
                            margin-bottom: 28px;
                        }
                        .testi p {
                            margin-bottom: 28px;
                        }

                .testi-buttons {
                    position: relative;
                    z-index: 1;
                }
                    .testi-buttons a.btn-a {
                        padding: 17.5px 14px;
                        margin: 0 19px;
                    }
                    .testi-buttons button {
                        color: #fff
                    }
                        .testi-buttons button i {
                            color: #ede0cf;
                            border-color: #777777;
                        }


/*section 9*/
section.section-9 {
    overflow: hidden;
}
    .ernies-blog {

    }
        .eb-wrapper {
            text-align: right;
            /*padding: 159px 135px 0;*/
            padding: 159px 9.508% 165px;
            position: relative;
        }
            .eb-wrapper:before {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                /*left: 37.3%;*/
                left: calc(475px + 9.508%);
                height: 131px;
                background: #debf89;
            }
            .eb-inner {
                position: relative;
            }
                .eb-inner .section-parallax-a.section-parralax-white {
                    top: -2px;
                    left: -2000px;
                    right: 100.9%;
                    bottom: -212px;
                }
                .eb-inner .section-parallax-a.section-parralax-flow-right {
                    left: 100.9%;
                    right: -2000px;
                    top: 48.7%;
                    bottom: -212px;
                }
            .eb-title {
                display: inline-block;
                position: relative;
            }
                .eb-title .accent-line {
                    width: 100vw;
                    right: 128%;
                    top: 65%;
                    height: 1px;
                }
                    .eb-title .accent-line-dot {
                        top: -9px;
                        right: -9px;
                        left: initial;
                    }
            .eb-list, .eb {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
            }
            .eb-list {
                font-size: 0;
                text-align: left;
                padding: 0 14px;
                margin-top: 64px;
                overflow: visible;
                
            }
                .eb {
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    width: 33.333333%;
                    padding: 0 10.5px;
                }
                    .eb canvas {
                        width: 100%;
                        display: block;
                        background-size: cover;
                        background-position: center;
                        margin-bottom: 36px;
                    }
                    .eb h3 {
                        /*font-size: 30px;*/
                        font-size: 25px;
                        line-height: 27px;
                        letter-spacing: .02em;
                        color: #000;
                        text-transform: uppercase;
                        margin-bottom: 19px;

                        /*white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;*/
                    }
                    .eb p {
                        font-size: 18px;
                        line-height: 28px;
                        letter-spacing: .05em;
                        color: #838383;
                        margin-bottom: 31px;
                    }
                    .eb a.btn-a {
                        width: 208px;
                        margin-top: auto;

                    }
                    .eb a {
                        color: #832920;
                        white-space: nowrap;
                        opacity: 1;
                        -webkit-transition: all .3s ease;
                        -moz-transition: all .3s ease;
                        -ms-transition: all .3s ease;
                        -o-transition: all .3s ease;
                        transition: all .3s ease;
                    }

                    .eb a:hover{
                        opacity: 0.7;
                    }

            .eb-controls.custom-buttons {
                position: absolute;
                left: 20px;
                top: 100%;
                margin-top: 73px;
            }
                .eb-controls a.btn-a {
                    margin: 0 7px;
                }

/*footer*/
footer.footer-wrapper {
    padding: 146px 0 0;
    overflow: hidden;
}


.single-aios-agents footer.footer-wrapper{
    padding: 0;
}
    /* REMOVED ON DEFAULT PAGES, THIS WILL ONLY SHOW ON NEWSLETTER PAGE */
    .ftr-newsletter-form {
        display: none;
    }

    #get-in-touch {
        padding: 70px 0 127px;
        margin-bottom: 121px;
        background: url(images/bg-git.jpg) fixed center/cover no-repeat;
        position: relative;
        /*overflow: hidden;*/
    }
        #get-in-touch:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: url(images/overlay-git.png) top left/auto 100% repeat-x;
        }
        #get-in-touch:after {
            content: '';
            position: absolute;
            left: 0;
            top: 100%;
            height: 121px;
            background: #debf89;
            /*width: 689px;*/
            width: 43.063%
        }
        .git-form {
            max-width: 955px;
            margin: 0 auto;
            position: relative;
            overflow: visible;
        }
            .git-form .section-parallax-a {
                top: 105px;
                bottom: -248px;
                right: 100%;
                margin-right: 108px;
                z-index: 1;
            }
            .git-form .section-title {
                text-align: center;
                letter-spacing: .02em;
                /*margin-bottom: 23px;*/
                margin: 0 auto 23px;
                padding-top: 25px;
            }
            .git-field-half {
                width: 50%;
            }
            .git-field-full {
                width: 100%;
            }
            .git-field {
                display: inline-block;
                vertical-align: top; 
                padding: 5.5px 7px;
                position: relative;
            }
                .git-field input[type="text"],
                .git-field input[type="tel"],
                .git-field input[type="email"],
                .git-field textarea {
                    width: 100%;
                    height: 62px;
                    background: rgba(0,0,0,.4);
                    font-size: 14px;
                    letter-spacing: .24em;
                    color: #fff;
                    text-transform: uppercase;
                    border: none;
                    padding-left: 22px;
                    padding-right: 22px;
                    outline: none;
                }
                .git-field textarea {
                    padding-top: 31px;
                    padding-right: 140px;
                    height: 164px;
                    resize: none;
                }
                .git-field input[type="submit"] {
                    position: absolute;
                    width: 35px;
                    height: 35px;
                    border: none;
                    background: url(images/icon-airplane.png) center/cover no-repeat;
                    bottom: 24px;
                    right: 28px;
                    outline: none;
                }
				
                #get-in-touch .git-field .git-submit {
                    position: absolute;
                    width: 111px;
                    height: 52px;
                    bottom: 24px;
                    right: 28px;
                    background-color: #debf89;
                }
                #get-in-touch .git-field .git-submit input[type="submit"] {
                    width: 100%;
                    height: 52px;
                    border: none;
                    background: #DEBF89;
                    outline: none;
                    text-transform: uppercase;  
                    /*background-image: url('images/send-button.jpg');*/
                    font-size: 0;
                    display: block;
                    padding: 0;
                    margin: 0;
                    font-size: 0;
                    border: none;
                    outline: none;
                    background-color: transparent;
                    position: relative;
                    z-index: 1;
                    bottom: auto;
                    right: auto;
                    transition: all 0.3s ease;
                }
                    #get-in-touch .git-field .git-submit span.submit-title {
                        width: 100%;
                        display: inline-block;
                        vertical-align: middle;
                        color: #000000;
                        font-size: 14px;
                        font-weight: 700;
                        text-align: center;
                        text-transform: uppercase;
                        position: absolute;
                        z-index: 2;
                        line-height: 53px;
                        letter-spacing: 0.26em;
                        pointer-events: none;
                        transition: all 0.3s ease;
                    }
                    #get-in-touch .git-field .git-submit:hover span.submit-title {
                        color: #ffffff;
                    }
                    #get-in-touch .git-field .git-submit:hover {
                        background-color: #000000;
                    }
                    #get-in-touch .git-field .git-submit span.submit-title:before,
                    #get-in-touch .git-field .git-submit span.submit-title:after {
                        width: 11px;
                        height: 1px;
                        content: '';
                        display: inline-block;
                        vertical-align: middle;
                        background-color: #000000;
                    }
                        #get-in-touch .git-field .git-submit span.submit-title:before {
                            margin-right: 15px;
                        }
                        #get-in-touch .git-field .git-submit span.submit-title:after {
                            margin-left: 15px;
                        }
                        #get-in-touch .git-field .git-submit:hover span.submit-title:before,
                        #get-in-touch .git-field .git-submit:hover span.submit-title:after {
                            background-color: #ffffff;
                        }

            .git-form form {
                font-size: 0;
                    padding-bottom: 20px;
                position: relative;
            }
            .git-form label {
                display: inline;
            }
            .git-form div.wpcf7 .ajax-loader {
                position: absolute;
                top: 100%;
                right: 10px;
            }
            .git-form div.wpcf7-response-output {
                /*position: absolute;
                top: 90%;
                left: 6px;
                right: 6px;
                font-size: 14px;
                text-align: center;
                letter-spacing: .05em;
                color: #000;
                margin: 6px 0 0;
                background: rgba(0,0,0,.4);
                color: #fff;
                height: initial!important;*/
                position: absolute;
                top: 84.5%;
                left: 6px;
                right: 6px;
                font-size: 14px;
                text-align: center;
                letter-spacing: .05em;
                color: #000;
                margin: 6px 0 0;
                background: rgba(0,0,0,.4);
                color: #fff;
                height: initial!important;


            } 
            .git-form .wpcf7-form-control-wrap {
                display: block;
            }
                .git-form .use-floating-validation-tip span.wpcf7-not-valid-tip {
                    font-size: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    letter-spacing: .02em;
                }

    .footer-bottom {
        position: relative;
        text-align: center;
    }
        .footer-bg {
            position: relative;
            /*background: url(images/bg-footer.jpg) fixed center/cover no-repeat;*/
            background-image: url(images/bg-footer.jpg);
            background-size: cover;
            /*background-position: center;*/
            background-position: center;
            background-attachment: fixed;
            background-repeat: no-repeat;
            min-height: 800px;
            padding: 154px 0 66px;
        }
            /*.footer-bottom:before,
            .footer-bottom:after,
            .footer-bg:before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: calc(100% - 90px);
                right: 0;
            }*/
            /*.footer-bg:before {
                left: 0;
                right: 90px;
                background: rgba(0,0,0,.8);
            }
            .footer-bottom:before {
                background: rgba(255,255,255,.6);
                z-index: 1;
            }*/
            /*.footer-bottom:after {
                left: calc(100% - 90px);
                right: 0;                
                background: url(images/bg-footer.jpg) fixed center/cover no-repeat;
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                background-repeat: no-repeat;
                -webkit-filter: grayscale(1);
                filter: grayscale(1);
            }*/

        .footer-bottom .container {
            position: relative;
        }
            .footer-logo {
                margin-bottom: 91px;
            }
                .footer-logo img {
                    max-width: 100%;
                    margin: 0 37.5px;
                }

            .footer-contact-list {
                font-size: 18px;
                letter-spacing: .15em;
                color: #fff;
                margin-bottom: 107px;
            }
                .footer-contact-phone {
                    margin-bottom: 12px;
                }
                .footer-contact-address {
                    margin-bottom: 21px;
                }
                .footer-contact {

                }
                    .footer-contact i.ai-font-phone {
                        font-size: 10px;
                        top: -2px;
                        margin-right: 13px;
                    }
                    .footer-contact i.ai-font-location-c {
                        font-size: 16px;
                        top: 2px;
                        margin-right: 9px;
                    }
                .footer-contact.smi-list {
                    width: 100%;
                    letter-spacing: 0;
                }
                    .footer-contact.smi-list a {
                        display: inline-block;
                        margin: 0 8px;
                        background: rgba(255,255,255,.19);
                        width: 51px;
                        height: 51px;
                        line-height: 51px;
                        font-size: 27px;
                    }
                        .footer-contact.smi-list a:hover {
                            background: #debf89;
                            color: #000;
                        }

            .footer-navs {
                margin-bottom: 33px;
            }
                .footernav li {
                    display: inline-block;
                    vertical-align: top;
                    margin: 0 17.5px;
                }
                    .footernav li a {
                        font-weight: 100;
                        font-size: 16px;
                        text-transform: uppercase;
                        letter-spacing: .2em;
                        color: #fff;
                        -webkit-transition: all .3s ease;
                        -moz-transition: all .3s ease;
                        -ms-transition: all .3s ease;
                        -o-transition: all .3s ease;
                        transition: all .3s ease;
                    }

                    .footernav li a:hover {
                        color: #8e8e8e;
                    }

            .footer-disclaimer {
                font-size: 9px;
                line-height: 12px;
                letter-spacing: .1em;
                color: #8e8e8e;
                text-transform: uppercase;
                max-width: 1040px;
                margin: 0 auto 51px;
            }
            .footer-copyright {
                font-size: 12px;
                letter-spacing: .1em;
                color: #8e8e8e;
            }
                .footer-copyright a {
                    color: #8e8e8e;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    -o-transition: all .3s ease;
                    transition: all .3s ease;
                }

                .footer-copyright a:hover{
                    color: #fff;
                }

                .footer-copyright a.footer-agentimage {
                    font-weight: 700;
                    text-decoration: underline;
                }
                .footer-copyright img {
                    margin: 13px 13px 0;
                    vertical-align: top;
                }
                .footer-copyright img:last-child {
                    margin-top: 12px;
                }
 
/*******************************************************
 *
 * 2. IP Styles
 *
 *******************************************************/
.ip-container #main-wrapper {
    z-index: initial!important;
}
.ip-banner-wrap {
    position: relative;
}
    .ip-banner {
        width: 100%;
        /*background: url(images/bg-parallax-a.jpg) fixed top center/cover no-repeat;*/
        overflow: hidden;
        /*padding-left: 90px;*/
        position: relative;
    }
        .ip-banner:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 514px;
            background: url(images/overlay-slide.png) bottom left repeat-x;
        }
        .ip-banner:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,.2) url(images/overlay-ip-banner.png) bottom left repeat-x;
        }
        .ip-banner canvas{
            display: block;
            width: 100%;
            /*background: url(images/slide-1.jpg) center/cover no-repeat;*/
            position: relative;
            /*min-height: 250px;*/
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 374px;
        }

    .breadcrumb-container {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 16px;
    }
        .ip-banner-wrap #breadcrumbs,
        #content p#breadcrumbs,
        .ip-listings-main-slider-holder p#breadcrumbs{
            font-size: 12px;
            line-height: 1;
            letter-spacing: .05em;
            text-transform: uppercase;
            color: #fff;

            max-width: calc(100% - 215px);
            width: 100%;
        }
            #content p#breadcrumbs {
                color: #838383;
            }
            .ip-banner-wrap #breadcrumbs > span > span {
                margin: 0 3px;
            }
            .ip-banner-wrap #breadcrumbs > span > span:first-child {
                margin-left: 0;
            }
            .ip-banner-wrap #breadcrumbs > span > span.breadcrumb_last {
                font-weight: 700;
            }
            #breadcrumbs a:hover {
                color: #debf89;
            }
/* Adjust minimum height of page area */ 
#content-sidebar, #content-full{ min-height:}

/** Adjust width of content columns **/
#content-sidebar #content{ width: 76%; }
#content-full #content { width: 100%; }

/* Adjust width of sidebar */
.sidebar{ width: 22%; }

/* Adjust line height of page elements */
#content h4, aside h4,
#content p, aside p,
#content blockquote, aside blockquote,
#content ul, aside ul,
#content fieldset, aside fieldset,
#content form, aside form,
#content ol, aside ol,
#content dl, aside dl,
#content dir, aside dir,
#content menu, aside menu { line-height:1.7 }

/* Style .entry-title(post/page) and .archive-title(category/archive/etc) main headings (h1) */
#content .entry-title,
#content .archive-title { 
    font-family: 'Cormorant Garamond', serif;
    text-transform: uppercase;
    font-size: 80px;
    font-weight: 400;
    letter-spacing: .034em;
    color: #832920;
    line-height: 1;
    margin: .2em 0;
}

/* Styles for category/archive/search/etc subheadings (h2) */
#content .archive-subtitle { 
    font-family: 'Cormorant Garamond', serif;
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: .034em;
    color: #832920;
    line-height: 1;
}
#content .entry,
#content p {
    font-size: 19px;
    line-height: 28px;
    color: #3F3F3F;
    letter-spacing: .05em;
}

#content p#breadcrumbs {
    display: none;
}
#content p {
    margin: 1.5em 0;
}
#main-wrapper {
    overflow: hidden;
}

#ihf-main-container {
    font-size: 18px;
}
#ihf-main-container .btn-primary#ihf-main-search-form-submit,
#ihf-main-container .btn-primary#ihf-search-adv-submit,
#ihf-main-container .btn-primary#ihf-search-adv2-submit {
    background-color: #debf89;
    border: none;
    border-radius: 0;
    color: #000000;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.26em;
}
    #ihf-main-container .btn-primary#ihf-main-search-form-submit:hover,
    #ihf-main-container .btn-primary#ihf-search-adv-submit:hover,
    #ihf-main-container .btn-primary#ihf-search-adv2-submit:hover {
        color: #ffffff;
        background-color: #000000;
    }

#ihf-main-container .btn-primary,
#ihf-main-container .title-bar-1 {
    color: #000000;
    background-color: #debf89;
    border-color: #c3a064;
}
    #ihf-main-container .title-bar-1 a,
    #ihf-main-container .title-bar-1 a:visited {
        color: #000000;
    }

    #ihf-main-container .title-bar-1 a:hover {
        color: #fff;
    }
#ihf-main-container .btn-primary.active {
    color: #000000;
    background-color: #c3a064;
    border-color: #c3a064;
}
    #ihf-main-container .btn-primary:hover,
    #ihf-main-container .btn-primary.active:hover {
        color: #ffffff;
        background-color: #000000;
    }

.sb-info {

}
    .sb-img {
        margin-top: 30px;
    }
        .sb-img img {
            width: 100%;
        }
    .sb-info h2 {
        font-family: 'Cormorant Garamond', serif;
        text-transform: uppercase;
        font-size: 27px;
        letter-spacing: .034em;
        color: #832920;
        line-height: 1;
        margin: .2em 0;
        text-align: center;
    }
    .sb-contact {
        text-align: center;
    }
        .sb-contact i.ai-font-phone {
            font-size: 14px;
            margin-right: 10px;
            color: #debf89;
        }
        .sb-contact i.ai-font-location-c {
            font-size: 20px;
            top: 3px;
            margin-right: 5px;
            color: #debf89;
        }
    .sb-smi.smi-list {
        font-size: 0;
        text-align: center;
        margin-top: 10px;
    }
        .sb-smi.smi-list a {
            display: inline-block;
            vertical-align: top;
            margin: 0 5px;
            background: #000;
            color: #debf89;
        }
            .sb-smi.smi-list a:hover {
                background: #debf89;
                color: #000;
            }

a.fp-view-all {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .26em;
    color: #000;
    border: 2px solid #000;
    margin: 0 5px;
}

a.btn-a.fp-view-all span:before, a.btn-a.fp-view-all span:after {
    background: #000;
    margin-top: -3px;
}

a.fp-view-all:hover {
    border: 2px solid #000;
    background: #000;
}

a.fp-view-all:hover span{
    color: #fff;
}

a.fp-view-all:hover span::after,
a.fp-view-all:hover span::before{
    background: #fff;
}



.lfs-title {
	font-size: 14px;
	float: left;
	text-transform: uppercase;
	padding: 4px 10px 0 0;
	color: #fff;
	letter-spacing: .24em;
}

.git-lfs {
	background: rgba(0,0,0,.4);
	width: 100%;
	margin: 0 auto !important;
	display: block;
	padding: 30px 20px;
	margin-top: 5px !important;
	margin-bottom: 0 !important;
}

.git-lfs input[type="radio"] {
	margin: 0 10px 0 0;
	-webkit-appearance: none;
	padding-left: 20px;
	font-size: 14px;
	outline-color:transparent !important;
}
 
.git-lfs span.wpcf7-list-item {
	margin: 0;
}

.git-lfs .wpcf7-list-item-label {
	font-size: 14px;
	color: #fff;
	margin-right: 60px;
	text-transform: uppercase;
	vertical-align: middle;
	letter-spacing: .24em;
}

.git-spacer-bar {
	width: 100%;
	max-width: 94%;
	display: block;
	padding: 2px 0 0 0;
	position: absolute;
	background-color: rgba(255,255,255,0.5);
	left: 50%;
	transform: translateX(-50%);
	border-top: 1px solid rgba(0,0,0,0.3);
}

.git-lfs input[type="radio"] {
	margin: 0 10px 0 0;
	-webkit-appearance: none;
	appearance: none;
	background: url('images/radio-button-off.png') no-repeat;
	width: 22px;
	height: 22px;
	background-size: 100%;
	vertical-align: middle;
	outline-color:transparent !important;
	border: 0 none;
}

.git-lfs input[type="radio"]:checked {
	margin: 0 10px 0 0;
	-webkit-appearance: none;
	background: url('images/radio-button-on.png') no-repeat;
	width: 22px;
	height: 22px;
	background-size: 100%;
	vertical-align: middle;
}

.lfs {
	text-align: center;
}

.req-field {
	/*font-size: 16px;
	color: #fff;
	padding: 15px 30px 0;
	display: block;*/
    font-size: 16px;
    color: #fff;
    padding: 35px 30px 0;
    display: block;
}

/* .mtt-agent-12 .mtt-det-name .accent-line {
	height: 2px;
} */

/* Press and Awards */
.page-template-template-press .breadcrumb-container,
.ip-press-section-1 .container {
    width: 100%;
    max-width: 1450px;
}
.ip-press-wrap {
    
}
    .ip-press-section {
        overflow: hidden;
    }

    .ip-press-section-1 {
        padding: 112px 0 0;
    }
        .ip-press-agent {
            position: relative;
            padding-bottom: 133px;
        }
            .ip-press-agent:after {
                content: '';
                position: absolute;
                right: 28%;
                bottom: 0;
                height: 133px;
                width: 1000px;
                background: #debf89;
            }
            .ip-press-agent .section-parallax-a.section-parralax-flow-left.section-parralax-white {
                left: -1000px;
                right: 82%;
                top: -112px;
                bottom: 0;
            }
            .ip-press-agent img {
                width: 100%;
                display: block;
                z-index: 1;
                position: relative;
            }

        .ip-press-text {
            padding-left: 14%;
            padding-right: 20.5%;
            padding-bottom: 40px;
        }
            .ip-press-text .ip-title {
                margin: 25px 0 14px;
            }
            .ip-title {
                position: relative;
                display: inline-block;
            }
                .ip-press-text #content .section-title {
                    letter-spacing: .05em;
                }
                #content .section-title {
                    margin: 0;
                    letter-spacing: .02em;
                }

            .ip-press-wrap .accent-line {
                width: 1000px;
                left: 100%;
            }
                .ip-press-wrap .accent-line.accent-red {
                    width: 1000px;
                    height: 1px;
                    left: 100%;
                    top: 66.5%;
                    margin-left: 18px;
                }

            .ip-press-text a.btn-a {
                margin-top: 12px;
            }
            .ip-container a.btn-a,
            .ip-container .btn-a {
                padding: 10.5px 23.5px;
            }
            .ip-container .fp-btn.btn-a {
                padding: 0;
            }

    .ip-press-section-2 {
        padding: 98px 0 130px;
        position: relative;
    }
        .ip-press-section-2 .container {
            position: relative;
            z-index: 1;
        }
        .ip-press-section-2:before {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            background: #debf89;
            height: 211px;
            left: 5.6%;
            z-index: 1;
        }
        .ip-press-section-2 .section-parallax-a.section-parralax-flow-right.section-parralax-white {
            right: 0;
            top: 0;
            bottom: 0;
            width: 215px;
        }
        .ip-press-list {
            font-size: 0;
            letter-spacing: 0;
            line-height: 1;
            margin-left: -22px;
            margin-right: -22px;
        }
            .ip-press-list.slick-slider .slick-list {
                overflow: visible!important;
            }
                .ip-press-list .slick-slide > div:first-child {
                    text-align: right;
                }
                    .ip-press-list .slick-slide > div:first-child a.ip-press-item.itm-media:last-child {
                        margin-right: -29px;
                    }
                .ip-press-list .slick-slide > div:last-child {
                    text-align: left;
                }
                    .ip-press-list .slick-slide > div:last-child a.ip-press-item.itm-media:first-child {
                        margin-left: -48px;
                    }
                    .ip-press-list .slick-slide > div:last-child .itm-media:nth-child(odd) {
                        background: #000;
                    }
                    .ip-press-list .slick-slide > div:last-child .itm-media:nth-child(even) {
                        background-image: url(images/bg-itm-1.jpg);
                    }

            .ip-press-list a.ip-press-item.itm-media {
                display: inline-block!important;
                width: calc(33.3333333% - 4px)!important;
                margin: 2px;
            }

        .ip-press-buttons {
            letter-spacing: 0;
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            text-align: center;
            padding: 37px 0 0 7.8%;
            font-size: 0;
        }
            .ip-press-buttons button {
                vertical-align: middle;
            }
            .ip-press-buttons .custom-button-line {
                margin: 0 5px 0 2px;
            }

/* Press and Awards - end */

/*Blog*/
.page-template-template-blog #inner-page-wrapper {
    overflow: hidden;    
}
.ip-blog-wrap {
    padding: 87px 0 0;
    position: relative;
    overflow: visible!important;
}
    .ip-blog-wrap .section-parallax-a.section-parralax-flow-left.section-parralax-white {
        left: -2000px;
        right: calc(100% + 15px);
        top: 0;
        bottom: 36.45%;
    }
    .ip-blog-wrap .section-parallax-a.section-parralax-flow-right {
        right: -1000px;
        left: calc(100% + 15px);
        top: 20.75%;
        bottom: 0;
    }
    .ip-title-wrap {

    }
        .ip-title-wrap {
            text-align: right;
            margin-bottom: 64px;
        }
        .ip-title-center {
            text-align: center;
        }
        .ip-title-left {
            text-align: left;
        }
            .ip-blog-wrap .accent-line.accent-red {
                width: 5000px;
                right: 100%;
                top: 65%;
                height: 1px;
                margin-right: 57px;
            }
                .ip-blog-wrap .accent-line-dot {
                    left: initial;
                    right: -9px;
                }

            #content .ip-blog-wrap .section-title {
                letter-spacing: .02em;
            }

        .ip-blog-list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            padding: 0 9px;
        }
            .ip-blog-item {
                width: 33.3333333%;
                padding: 0 10.5px;
                margin-bottom: 92.5px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                        flex-direction: column;
            }
                .ip-blog-img {
                    display: block;
                    width: 100%;
                    background-position: center bottom;
                    background-size: cover;
                    /*background-size: contain;*/
                    background-repeat: no-repeat;
                }
                #content .ip-blog-item h2 {
                    font-weight: 400;
                    /*font-size: 30px;*/
                    /*font-size: 27px;*/
                    font-size: 23px;
                    line-height: 1.05;
                    letter-spacing: .02em;
                    margin: 0;
                    color: #000;
                    text-transform: uppercase;
                    margin: 37px 0 0;
                }
                #content .ip-blog-item p {
                    font-size: 18px;
                    line-height: 28px;
                    letter-spacing: .05em;
                    color: #838383;
                    margin: 19px 0 31px;
                }
                .ip-blog-item a.btn-a {
                    width: 208px;
                    display: block;
                    margin-top: auto;
                }

                .ip-blog-item-row {
                    width: 100%;
                    display: flex;
                }

    #content ul.ip-blog-pagination,
    #content .ip-custom-pagination {
        list-style: none;
        background: #debf89;  
        margin: 6px -15px 0 auto;
        max-width: 756px;
        letter-spacing: 0;
        font-size: 0;
        /*padding: 53px 5.4% 47px;*/
        padding: 53px 0 47px;
        text-align: center;
    }
        ul.ip-blog-pagination li,
        .ip-custom-pagination li {
            display: inline-block;
            vertical-align: middle;
        }
            ul.ip-blog-pagination li a,
            .ip-custom-pagination li a,
            .ip-custom-pagination li span,
            .ip-custom-pagination li button {
                display: block;
                font-weight: 700;
                font-size: 14px;
                line-height: 1;
                color: #8e7344;
                padding: 3.5px 26.9px;
                border: none;
                border-right: 1px solid #a3844f;
                margin: 4px 0;
                background: transparent;
                outline: none;
            }
            ul.ip-blog-pagination li.active a,
            ul.ip-blog-pagination li a:hover,
            .ip-custom-pagination li.active a,
            .ip-custom-pagination li a:hover,
            .ip-custom-pagination li a.current,
            .ip-custom-pagination li a:hover,
            .ip-custom-pagination li span,
            .ip-custom-pagination li span:hover,
            .ip-custom-pagination li.slick-active button,
            .ip-custom-pagination li button:hover {
                color: #000;
            }
            ul.ip-blog-pagination li a.custom-button-next,
            .ip-custom-pagination .custom-button-next,
            ul.ip-blog-pagination li a.custom-button-prev,
            .ip-custom-pagination .custom-button-prev {
                background: none;
                border: none;
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: .26em;
                color: #000;
                outline: none;
                padding: 0;
                margin-left: 17px;
            }
                ul.ip-blog-pagination li a.custom-button-next i,
                .ip-custom-pagination .custom-button-next i,
                ul.ip-blog-pagination li a.custom-button-prev i,
                .ip-custom-pagination .custom-button-prev i {
                    display: inline-block;
                    width: 23px;
                    height: 23px;
                    border-radius: 50%;
                    border: 1px solid rgba(131,41,32,.29);
                    font-size: 11px;
                    color: #832920;
                    text-align: center;
                    line-height: 22px;
                    margin-left: 6px;
                    padding-left: 4px;
                    font-style: normal!important;
                }

              /* .ip-custom-pagination a.next.page-numbers {
                    border-right: none;
                    border-left: 1px solid;
                }

                .ip-custom-pagination  ul.page-numbers li:nth-last-child(2) a {
                    border-right: none;
                }

                .ip-custom-pagination ul.page-numbers li:last-child span {
                    border-right: none;
                }*/
                

                .ip-custom-pagination li a,
                .ip-custom-pagination li span,{
                    /*border-left: 0.5px solid #a3844f;*/
                    border-right: 1px solid #a3844f;
                }
    
                .ip-custom-pagination li a.prev.page-numbers,
                .ip-custom-pagination li a.next.page-numbers{
                    border: none;
                }

                a.prev.page-numbers, a.next.page-numbers {
                    border: none !important;
                    padding: 0;
                    margin: 0;
                }

                a.prev.page-numbers span, a.next.page-numbers span{
                    padding: 0 26.9px;
                }

                .ip-custom-pagination li a.prev.page-numbers{
                    border-right: 1px solid #a3844f !important;
                }

                a.next.page-numbers span {
                    margin-left: 0;
                }
                /*.ip-custom-pagination li a.prev.page-numbers{
                    border-right: 1px solid #a3844f !important;   
                }




                .ip-custom-pagination li a.next.page-numbers{
                    border-left: 1px solid #a3844f !important;   
                }*/




/*Blog end*/

/*About*/
.page-template-template-about #main-wrapper {
    overflow: hidden;
}
.page-template-template-about #content-full {
    position: relative;
}

.ip-about-wrap {

}
    .ip-about-section {

    }
    .ip-about-section-1 {
        
    }
        .ip-about-section-1 .container,
        .page-template-template-about .breadcrumb-container {
            width: 1330px;
            max-width: 100%;
        }
            .page-template-template-about .ip-banner-wrap #breadcrumbs {
                margin-left: 45.05%;
            }
            .ip-about-s1-img {
                margin-top: -40px;
                width: 46.1%;
                float: left;
                position: relative;
                padding: 0 0 80px;
            }
                .ip-about-s1-img img {
                    display: block;
                    width: 100%;
                    position: relative;
                }
                .ip-about-s1-img:before {
                    content: '';
                    position: absolute;
                    left: -1000px;
                    bottom: 0;
                    right: 20%;
                    height: 133px;
                    background: #debf89;
                }
            .ip-about-s1-text {
                width: 53.9%;
                float: left;
                padding: 87px 0 39px 35px;
                position: relative;
            }
                .ip-about-s1-text .section-parallax-a.section-parralax-flow-right {
                    right: -1000px;
                    left: 88.6%;
                    top: 240px;
                    bottom: 0;
                }
                .ip-about-s1-text-inner {
                    position: relative;
                    background: #fff;
                    padding: 0 0 6px;
                }
                    .ip-about-s1-text-inner:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 100%;
                        right: -41px;
                        background: #fff;
                    }
                    .ip-about-s1-text .ip-title-wrap {
                        text-align: left;
                        margin-bottom: 0;
                    }
                        #content .ip-about-s1-text .section-title {
                            white-space: nowrap;
                            letter-spacing: .02em;
                        }
                        .ip-about-s1-text .accent-line.accent-red {
                            width: 1000px;
                            height: 1px;
                            left: 100%;
                            top: 67%;
                            margin-left: 39px;
                        }
                    #content .ip-about-s1-text p {
                        margin: 1.47em 0;
                        color: #303030;
                        font-size: 19px;
                        line-height: 28px;
                    }

    .ip-about-section-2 {
        color: #303030;
        padding: 88px 0 0;
    }
        .ip-about-section-2 div[class*="col-"] {
            position: relative;
        }
        .ip-about-section-2 .section-parallax-a.section-parralax-flow-left.section-parralax-white {
            top: 17px;
            right: 54.9%;
            bottom: 0;
        }
        .ip-about-s2-left {
            padding-left: 84px;
            padding-bottom: 20px;
            background: #fff;
            position: relative;
            margin-bottom: 65px;
            margin-left: -16px;
        }
            .ip-about-s2-text {
                background: #fff;
                margin-right: -291px;
                z-index: 1;
                position: relative;
                padding: 49px 110px 42px 0;
            }
                #content .ip-about-s2-text p {
                    color: #303030;
                    margin: 0;
                }

            .ip-about-s2-cntct {
                padding: 7px 0 0;
                position: relative;
            }
                    .ip-about-section-2 .ip-title-wrap {
                        text-align: left;
                        margin-bottom: 16px;
                    }
                        #content .ip-about-section-2 .ip-title-wrap .section-title {
                            font-size: 60px;
                            letter-spacing: .02em;
                        }
                            #content .ip-about-section-2 .ip-title-wrap .section-title span {
                                margin-bottom: 6px;
                            }

                        #content .ip-about-section-2 .accent-line.accent-red {
                            right: 100%;
                            width: 1000px;
                            height: 1px;
                            top: 64.9%;
                            margin-right: 29px;
                        }
                            #content .ip-about-section-2 .accent-line-dot {
                                left: initial;
                                right: -9px;
                            }

                    .ip-about-cntct {
                        font-size: 20px;
                        line-height: 18px;
                        letter-spacing: .05em;
                        color: #303030;
                        position: relative;
                        padding-left: 17px;
                        margin-bottom: 12px;
                    }
                        .ip-about-cntct i {
                            font-style: normal!important;
                            font-size: 12px;
                            vertical-align: top;
                            position: absolute;
                            top: 0;
                            left: 0;
                            color: #debf89;
                        }
                        .ip-about-cntct i.ai-font-person-a {
                            top: 4px;
                        }
                        .ip-about-cntct i.ai-font-location-c {
                            font-size: 17px;
                            left: -2px;
                            top: 2px;
                        }
                        .ip-about-cntct.smi-list a {
                            display: inline-block;
                            vertical-align: top;
                            width: 32px;
                            height: 32px;
                            line-height: 32px;
                            font-size: 17px;
                            background: #303030;
                            color: #debf89;
                            margin: 7px 7px 7px 0;
                        }
                            .ip-about-cntct.smi-list a:hover {
                                background: #debf89;
                                color: #303030;
                            }

        .ip-about-s2-right {
            margin-left: -28px;
            margin-right: calc( ( 1140px - 100vw ) / 2 );
            max-width: 910px;
            position: relative;
            padding: 0 0 74px;
        }
            .ip-about-s2-right:before {
                content: '';
                position: absolute;
                left: 25%;
                right: -1000px;
                bottom: 0;
                height: 74px;
                background: #debf89;
            }
            .ip-about-s2-img {
                position: relative;
            }
                .ip-about-s2-right img {
                    display: block;
                    width: 100%;
                    position: relative;
                }
                .ip-about-s2-right span {
                    display: block;
                    font-size: 20px;
                    line-height: 1;
                    letter-spacing: .05em;
                    color: #fff;
                    bottom: 0;
                    left: 0;
                    position: absolute;
                    padding: 11px 20px;
                }
                    .ip-about-s2-right span:hover {
                        color: #debf89;
                    }

    .ip-about-section-3 {
        padding: 86px 0 0;
    }
        .ip-about-section-3 .container {
            position: relative;
        }
        .ip-about-section-3 .section-parallax-a.section-parralax-flow-left {
            right: 90%;
            top: 263px;
            bottom: 0;
        }
        .ip-about-section-3 .ip-title-wrap {
            text-align: left;
            
        }
            .ip-about-section-3 .ip-title-wrap {
                margin-bottom: 52px;
            }
                #content .ip-about-section-3 .section-title,
                #content .ip-about-section-4 .section-title {
                    letter-spacing: .02em;
                }
                .ip-about-section-3 .accent-line.accent-red {
                    width: 1000px;
                    right: 100%;
                    top: 65%;
                    height: 1px;
                    margin-right: 72px;
                }
                    .ip-about-section-3 .accent-line-dot {
                        left: initial;
                        right: -9px;
                    }
        .ip-about-active-listing-list,
        .ip-about-sold-listing-list,
        .ip-about-featured-listing-list {
            margin: 0 -138px;
            font-size: 0;
            letter-spacing: 0;
        }
            .ip-about-active-listing-list .fp,
            .ip-about-active-listing-list .fp:nth-child(1),
            .ip-about-active-listing-list .fp:nth-child(2),
            .ip-about-sold-listing-list .fp,
            .ip-about-sold-listing-list .fp:nth-child(1),
            .ip-about-sold-listing-list .fp:nth-child(2),
            .ip-about-featured-listing-list .fp,
            .ip-about-featured-listing-list .fp:nth-child(1),
            .ip-about-featured-listing-list .fp:nth-child(2) {
                width: 100%!important;
                vertical-align: top;
                padding: 0 1.5px;
            }
                .ip-about-active-listing-list .fp-img canvas,
                .ip-about-active-listing-list .fp:nth-child(2) .fp-img canvas,
                .ip-about-sold-listing-list .fp-img canvas,
                .ip-about-sold-listing-list .fp:nth-child(2) .fp-img canvas,
                .ip-about-featured-listing-list .fp-img canvas,
                .ip-about-featured-listing-list .fp:nth-child(2) .fp-img canvas {
                    height: 497px;
                }

                .single-aios-agents .ip-about-active-listing-list .fp-img canvas,
                .single-aios-agents .ip-about-active-listing-list .fp:nth-child(2) .fp-img canvas,
                .single-aios-agents .ip-about-sold-listing-list .fp-img canvas,
                .single-aios-agents .ip-about-sold-listing-list .fp:nth-child(2) .fp-img canvas,
                .single-aios-agents .ip-about-featured-listing-list .fp-img canvas,
                .single-aios-agents .ip-about-featured-listing-list .fp:nth-child(2) .fp-img canvas {
                    height: auto;
                }

        #content .ip-about-active-listing-dots.ip-custom-pagination,
        #content .ip-about-sold-listing-dots.ip-custom-pagination,
        #content .ip-about-featured-listing-dots.ip-custom-pagination {
            margin: 0 0 0 -10px;
            display: inline-block;
            padding: 43px 159px 39px 4.5%;
            position: relative;
            /*min-width: 579px;*/
        }
            .ip-about-active-listing-dots a.custom-button-prev.slick-arrow,
            .ip-about-sold-listing-dots a.custom-button-prev.slick-arrow,
            .ip-about-featured-listing-dots a.custom-button-prev.slick-arrow {
                display: none!important;
            }
            #content .ip-custom-pagination ul {
                margin: 0;
            }
            #content .ip-about-active-listing-dots.ip-custom-pagination a.custom-button-next,
            #content .ip-about-sold-listing-dots.ip-custom-pagination a.custom-button-next,
            #content .ip-about-featured-listing-dots.ip-custom-pagination a.custom-button-next {
                position: absolute;
                right: 75px;
            }

    .ip-about-section-4 {
        text-align: right;
        overflow: hidden !important;
    }
        .ip-about-section-4 .section-parallax-a.section-parralax-flow-right {
            left: 90%;
            top: 259px;
            bottom: 0;
            right: -1000px;
        }
        .ip-about-section-4 .container,
        .ip-about-section-4 .ip-title-wrap {
            position: relative;
        }
        .ip-about-section-4 .ip-title-wrap {
            margin-bottom: 52px;
        }
            .ip-about-section-4 .section-title span {
                margin-bottom: 6px;
            }
            .ip-about-section-4 .accent-line.accent-red {
                width: 1000px;
                height: 1px;
                top: 63%;
                left: 100%;
                margin-left: 70px;
            }

        #content .ip-about-sold-listing-dots.ip-custom-pagination {
            margin-left: auto;
            margin-right: -15px;
            padding-right: 163px;
            text-align: left;
        }

/*About end*/

/*Meet the team*/
.page-template-template-team .ip-banner-wrap {
    display: none;
}
.ip-team-wrap {
    position: relative;
    overflow: hidden;
}
    #content .breadcrumb-container #breadcrumbs {
        display: block;
        margin: 0;
         color: #fff; 
    }
    .ip-team-map {
        position: relative;
    }
        .ip-team-map .mtt-map canvas {
            display: block;
            width: initial;
            margin: 0 auto;
            max-width: 100%;
        }
        .ip-team-map .mtt-hover.mtt-agent-1 {
            top: 340px;
            left: 416px;
        }
        .ip-team-map .mtt-hover.mtt-agent-2 {
            top: 249px;
            left: 639px;
        }
        .ip-team-map .mtt-hover.mtt-agent-3 {
            top: 313px;
            left: 554px;
        }
        .ip-team-map .mtt-hover.mtt-agent-4 {
            top: 379px;
            left: 714px;
        }
        .ip-team-map .mtt-hover.mtt-agent-5 {
            top: 248px;
            left: 765px;
        }
        .ip-team-map .mtt-hover.mtt-agent-6 {
            top: 308px;
            left: 826px;
        }
        .ip-team-map .mtt-hover.mtt-agent-7 {
            top: 269px;
            left: 973px;
        }
        .ip-team-map .mtt-hover.mtt-agent-8 {
            top: 394px;
            left: 1037px;
        }
        .ip-team-map .mtt-hover.mtt-agent-9 {
            top: 275px;
            left: 1176px;
        }
        .ip-team-map .mtt-hover.mtt-agent-10 {
            top: 225px;
            left: 686px;
        }
        .ip-team-map .mtt-hover.mtt-agent-11 {
            top: 334px;
            left: 616px;
        }
        .ip-team-map .mtt-hover.mtt-agent-12 {
            top: 254px;
            left: 547px;
        }
        .ip-team-map .mtt-hover.mtt-agent-13 {
            top: 322px;
            left: 463px;
        }
        .ip-team-map .mtt-hover.mtt-agent-14 {
            top: 284px;
            left: 348px;
        }
        .ip-team-map .mtt-hover.mtt-agent-15 {
            top: 244px;
            left: 241px;
        }
        .ip-team-map .mtt-hover.mtt-agent-16 {
            top: 394px;
            left: 283px;
        }
        .ip-team-map .mtt-hover.mtt-agent-17 {
            top: 309px;
            left: 95px;
        }

    .ip-team-section-1 {

    }
        .ip-team-section-1 .container {
            position: relative;
            padding: 68px 15px 78px;
        }
            .ip-team-section-1 .container:before {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                width: 41.4%;
                height: 133px;
                background: #debf89;
            }
            .ip-team-section-1 .section-parallax-a.section-parralax-flow-left {
                right: 100%;
                left: -1000px;
                top: 0;
                bottom: 0;
            }
            .ip-team-section-1 .section-parallax-a.section-parralax-flow-right {
                left: 100%;
                top: 0;
                bottom: 0;
                right: -1000px;
            }
        .ip-team-section-1 .ip-title-wrap {
            text-align: left;
            margin-bottom: 0;
            position: relative;
            padding-bottom: 65px;
        }
            #content .ip-team-section-1 .section-title {
                letter-spacing: .02em;
            }
            .ip-team-section-1 .accent-line.accent-red {
                top: 67%;
                left: 100%;
                width: 2000px;
                height: 1px;
                margin-left: 85px;
            }

        #content .ip-team-section-1 p {
            /*max-width: 424px;*/
            max-width: 100%;
            color: #303030;
        }
    .ip-team-section-2 {
        padding: 111px 0 127px;
        position: relative;
    }
        .ip-team-section-2:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 37.8%;
            height: 135px;
            background: #debf89;
            z-index: 1;
        }
        .ip-team-section-2 .section-parallax-a.section-parralax-flow-left.section-parralax-white {
            width: 13.45%;
            left: 0;
            top: 1px;
            bottom: 0;
        }
        .ip-team-section-2 .container {
            position: relative;
            max-width: 100%;
            width: 1450px;
            max-width: 90.625%;
        }
        .ip-team-section-2 .ip-title-wrap {
            margin-bottom: 89px;
        }
            #content .ip-team-section-2 .section-title {
                letter-spacing: .02em;
                font-size: 60px;
            }
                .ip-team-section-2 .section-title span {
                    margin-bottom: 6px;
                }
            .ip-team-section-2 .accent-line.accent-red {
                width: 2000px;
                height: 1px;
                top: 65%;
                left: 100%;
                margin-left: 58px;
            }
        .ip-agents-list {
            margin-left: -7.5px;
            margin-right: -7.5px;
            display: flex;
            flex-wrap: wrap;
        }
            .ip-agent {
                width: 25%;
                padding: 8px 7.5px;
                display: inline-block;
                vertical-align: top;
            }
                .ip-agent-inner {
                    display: block;
                    position: relative;
                    overflow: hidden;
                }
                    .ip-agent canvas {
                        display: block;
                        width: 100%;
                        background-position: center;
                        background-size: cover;
                        -webkit-filter: grayscale(1);
                            filter: grayscale(1);
                        -webkit-transition: all .3s ease;
                        -o-transition: all .3s ease;
                        transition: all .3s ease;
                    }
                        .ip-agent-inner:hover canvas {
                            -webkit-filter: grayscale(0);
                                filter: grayscale(0);  
                        }
                    .ip-agent-hover {
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: -90px;
                        -webkit-transition: bottom .3s ease;
                        -o-transition: bottom .3s ease;
                        transition: bottom .3s ease;
                    }
                     span.ip-agent-position {
                            display: block;
                            font-size: 14px;
                            line-height: 18px;
                            letter-spacing: 1px;
                            opacity: 0;
                            transition: all 0.1s ease-in-out;
                        }

                        .ip-agent-inner:hover .ip-agent-hover {
                            bottom: 0;
                        }

                        
                        .ip-agent-details {
                            background: #debf89;
                            color: #070707;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            padding: 20px 11.64%;
                        }

                       
                            .ip-agent-cntct-col.ip-agent-cntct-col-left {

                            }
                                .ip-agent-cntct-col-left .ip-agent-cntct:first-child {
                                    margin-bottom: 11px;
                                }
                                .ip-agent-cntct {
                                    position: relative;
                                    padding-left: 30px;
                                    font-size: 18px;
                                    letter-spacing: .15em;
                                    line-height: 1;
                                    color: #070707;
                                }
                                        #content .ip-agent i {
                                            font-style: normal;
                                        }
                                        .ip-agent-cntct-col-left i {
                                            position: absolute;
                                        }
                                            .ip-agent i.ai-font-phone  {
                                                font-size: 12px;
                                                top: 4px;
                                                left: 7px;
                                            }
                                            .ip-agent i.ai-font-bre {
                                                width: 17px;
                                                height: 12px;
                                                background: url(images/team/icon-team-bre.png) 0 0 no-repeat;
                                                left: 2px;
                                                top: 3px;
                                            }
                                        a.ip-agent-name {
                                            font-size: 24px;
                                            line-height: 1;
                                            letter-spacing: .1em;
                                            color: #fff;
                                            text-align: center;
                                            background: rgba(0,0,0,.7);
                                            text-transform: uppercase;
                                            /*padding: 34px 0 33px;*/
                                            padding: 34px 0 15px;
                                            display: block;
                                        }

                            .ip-agent-cntct-col.ip-agent-cntct-col-right {
                                border-left: 1px solid rgba(0,0,0,.27);
                            }
                                .ip-agent-cntct-col.ip-agent-cntct-col-right .ip-agent-cntct {
                                    font-size: 20px;
                                    padding: 14px 0 14px 30px;
                                }

                                .ip-agent-inner:hover a.ip-agent-name {
                                        padding-bottom: 33px;
                                    }
                                    .ip-agent-inner:hover span.ip-agent-position {
                                        opacity: 1;
                                    }

    .ip-team-section-3 {
        padding: 121px 0 108px;
        max-width: 1600px;
        margin: 0 auto;
        position: relative;        
    }
        .ip-team-section-3:before {
            content: '';
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            left: 26.5%;
            height: 205px;
            background: #debf89;
        }
        .ip-team-section-3 .section-parallax-a.section-parralax-flow-right {
            top: 0;
            left: 86.6%;
            right: -1000px;
            bottom: 0;
        }
        .ip-team-section-3 .container {
            /*width: 1390px;*/
             width: 87%; 
            font-size: 0;
            letter-spacing: 0;
            position: relative;
            overflow: visible;
        }
        .ip-team-section-3 .ip-title {
            vertical-align: top;
            margin-top: 122px;
            /*width: 34.7%;*/
            width: 50%;
        }
            #content .ip-team-section-3 .section-title {
                font-size: 60px;
                letter-spacing: .02em;
            }
                #content .ip-team-section-3 .section-title span {
                    margin-bottom: 6px;
                }
            .ip-team-section-3 .accent-line.accent-red {
                width: 1000px;
                height: 1px;
                right: 100%;
                top: 66%;
                margin-right: 43px;
            }
                .ip-team-section-3 .accent-line-dot {
                    left: initial;
                    right: -9px;
                }
        .ip-admin-list {
            display: inline-block;
            vertical-align: top;
            width: 717px;
            /*max-width: 65.3%;*/
            max-width: 50%;
            font-size: 0;
            letter-spacing: 0;
        }
            .ip-admin.ip-agent {
                width: 50%;
            }

/*Meet the Team end*/

/*Agent Details*/
.page-template-template-agent-details #get-in-touch {
    display: none;
}
.ip-agent-details-wrap {
    overflow: hidden;
    padding-bottom: 7px;
}
    .ip-ad-section {
        position: relative;
    }
        .ip-ad-section-3 .container,
        .ip-ad-section-1 .container {
            width: 1450px;
            max-width: 100%;
        }
    .ip-ad-section-1 {

    }
        .ip-ad-section-1 .container {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            -webkit-box-align: start;
                -ms-flex-align: start;
                    align-items: flex-start;
        }
            .ip-ad-section-1 .container:before, 
            .ip-ad-section-1 .container:after {
                display: none;
            }
        .ip-ad-s1-left {
            padding: 89px 15px 0 0;
            display: inline-block;
            vertical-align: top;
            /*max-width: 45%;*/
            max-width: 38%;
        }
            .ip-ad-agent-img {
                position: relative;
				background-position: top center !important;
            }
                .ip-ad-agent-img img {
                    display: block;
                    width: 100%;
                    max-width: 597px;
                }
        .ip-ad-s1-right {
            display: inline-block;
            vertical-align: top;
            position: relative;
            padding: 0 0 121px 15px;
            max-width: 55%;
        }
            .ip-ad-s1-right:before {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                left: 37.5%;
                height: 121px;
                background: #debf89;
            }
            .ip-ad-s1-right .section-parallax-a.section-parralax-flow-right.section-parralax-white {
                top: 0;
                bottom: 0;
                left: 80.85%;
                right: -1000px;
            }
            .ip-ad-contact-info {
                /*width: 628px;*/
                max-width: 100%;
                background: url(images/agent-details/ip-ad-bg-1.jpg) center/cover no-repeat;
                position: relative;
                z-index: 1;
                margin-top: -78px;
                text-align: center;
                /*padding: 91px 15px 80px;*/
                padding: 91px 45.5px 80px;
            }
                .ip-ad-contact-info:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(7,7,7,.85);
                    z-index: -1;
                }

                #content .ip-ad-contact-info .section-title,
                #content .ip-ad-git .section-title {
                    font-size: 48px;
                    color: #ede0cf;
                    letter-spacing: .02em;
                    display: block;
                    margin-bottom: 76px;
                }
                    #content .ip-ad-contact-info .section-title span,
                    #content .ip-ad-git .section-title span {
                        font-size: 18px;
                        color: #fff;
                        margin-bottom: 6px;
                    }

                .ip-ad-contact {
                    font-size: 30px;
                    line-height: 1;
                    letter-spacing: .1em;
                    color: #fff;
                    margin-bottom: 14px;
                }
                .ip-ad-contact.ip-ad-contact-email {
                    margin-bottom: 21px;
                }
                    .ip-ad-contact i {
                        font-size: 18px;
                        color: #ede0cf;
                        font-style: normal!important;
                    }
                    .ip-ad-contact i.ai-font-envelope-f {
                        margin-right: 12px;
                    }
                    .ip-ad-contact i.ai-font-bre {
                        display: inline-block;
                        vertical-align: top;
                        top: 6px;
                        width: 28px;
                        height: 20px;
                        background: url(images/icon-team-bre-alt.png) center/contain no-repeat;
                        margin-right: 8px;
                    }
                .ip-ad-contact-info a.btn-a {
                    /*margin: 55px auto 81px;
                    padding: 10.5px 17px;*/
                    margin: 25px auto 39px;
                    padding: 10.5px 17px;
                }
                .ip-ad-contact-info img {
                    display: block;
                    width: auto;
                    max-width: 300px;
                    width: 100%;
                    margin: 0 auto;
                    min-height: 150px
                }
                .ip-ad-contact-info img[style*="/images/agent-details/ip-ad-eca-logo.png');"]{
                    max-width: 110px;
                    min-height: initial;
                }
                .ip-ad-contact a:hover {
                    color: #debf89;
                }

    .ip-ad-section-2 {
        padding: 65px 0 2px;
        position: relative;
    }
        .ip-ad-section-2:before {
            content: '';
            position: absolute;
            bottom: 0;
            /*width: 493px;*/
            /*width: 30.8%;*/
            width: 17%;
            left: 0;
            height: 133px;
            background: #debf89;
        }
        .ip-ad-section-2 .section-parallax-a.section-parralax-flow-left.section-parralax-white {
            bottom: 0;
            left: -1000px;
            right: 100%;
            top: -564px;
            z-index: -1;
        }
        .ip-ad-section-2 .container {
            position: relative;
            font-size: 0;
            letter-spacing: 0;
        }
        .ip-ad-s2-left {
            padding-left: 68px;
            width: 45.7%;
            display: inline-block;
            vertical-align: top;
            will-change: transform,opacity;
        }
            .ip-ad-s2-left .ip-title-wrap {
                    margin-bottom: 35px;

            }
                .ip-ad-s2-left .ip-title {

                }
                    #content .ip-ad-s2-left .section-title {
                        letter-spacing: .02em;
                        font-size: 60px;
                    }
                        .ip-ad-s2-left .section-title strong {
                            display: block;
                            font-size: 60px;
                            font-weight: 400!important;
                            margin-top: -6px;
                        }
                    .ip-ad-s2-left .accent-line.accent-red {
                        width: 1000px;
                        height: 1px;
                        top: 43.5%;
                        right: 100%;
                        margin-right: 59px;
                    }
                        .ip-ad-s2-left .accent-line-dot {
                            left: initial;
                            right: -9px;
                        }
        .ip-ad-s2-right {
            width: 54.3%;
            display: inline-block;
            vertical-align: top;
            padding: 21px 0 0;
        }
            .ip-ad-s2-text {
                /*max-height: 355px;
                overflow-y: scroll;
                overflow-x: hidden;*/
                margin-right: -48px;
            }
                .ip-ad-s2-text-inner {
                    padding-right: 54px;
                }
                    #content .ip-ad-s2-text .ip-ad-s2-text-qoute {
                        font-size: 24px;
                        line-height: 28px;
                    }
                    #content .ip-ad-s2-text p {
                        font-size: 19px;
                        line-height: 28px;
                        letter-spacing: .05em;
                        color: #303030;
                        margin: 1.2em 0;
                    }
                    #content .ip-ad-s2-text p:first-child {
                        margin-top: 0;
                    }
                    .ip-ad-s2-text .simplebar-scrollbar {
                        width: 2px;
                        right: 0;
                    }
                        .ip-ad-s2-text .simplebar-track.vertical {
                            width: 2px;
                            background: #dedede;
                        }

                        .ip-ad-s2-text .simplebar-scrollbar:before {
                            opacity: 1!important;
                            background: #484848;
                        }

    .ip-ad-section-3 {
        padding: 140px 0 121px;
    }
        .ip-ad-section-3 .container {
            font-size: 0;
            letter-spacing: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
        }
            .ip-ad-section-3 .container:before,
            .ip-ad-section-3 .container:after {
                display: none;
            }
        .ip-ad-s3-left,
        .ip-ad-s3-right {
            display: inline-block;
            vertical-align: top;
            position: relative;
            /*width: 50%;*/
        }
        .ip-ad-s3-left {
            /*width: 820px;*/
            width: 58.81%;
            padding-right: 15px;
        }
            .ip-ad-s3-left .section-parralax-flow-left {
                top: 42.4%;
                bottom: -121px;
                right: 84.8%;
                left: -1000px;
            }
            .ip-ad-s3-left:before {
                content: '';
                position: absolute;
                left: 0;
                right: 15.3%;
                height: 121px;
                bottom: -121px;
                background: #debf89;
            }
            .ip-ad-s3-left .ip-title-wrap.ip-title-left {
                padding-left: 17%;
                padding-top: 14px;
                margin-bottom: 61px;
            }
                .ip-ad-s3-left .accent-line.accent-red {
                    width: 1000px;
                    height: 1px;
                    right: 100%;
                    top: 67.5%;
                    margin-right: 56px;
                }
                    .ip-ad-s3-left .accent-line-dot {
                        left: initial;
                        right: -9px;
                    }
            .ip-ad-testimonials {
                background: url(images/agent-details/ip-ad-bg-2.jpg) center/cover no-repeat;
                position: relative;
                z-index: 1;
                padding: 76px 0 82px;
            }
                .ip-ad-testimonials:before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(36,36,36,.8);
                }
                .ip-ad-testi-list, .testi-buttons {
                    max-width: 554px;
                    width: 80%;
                    margin: 0 auto;
                }
                    .ip-ad-testimonials .testi-qoute,
                    .ip-ad-testimonials .testi-buttons button i {
                        font-style: normal!important;
                    }
                    .ip-ad-testimonials .testi {
                        width: 100%;
                        padding: 0;
                    }
                        #content .ip-ad-testimonials .testi p {
                            margin: 0 0 28px;
                            font-size: 18px;
                            line-height: 28px;
                            letter-spacing: .05em;
                            color: #fff;
                        }
                .ip-ad-testimonials .testi-buttons {
                    margin-top: 51px;
                }
                    .ip-ad-testimonials .testi-buttons a.btn-a {
                        padding: 10.5px 14px;
                        border-color: #b4b4b4;
                    }
                        .ip-ad-testimonials .testi-buttons a.btn-a:hover {
                            border-color: #debf89;
                        }
        .ip-ad-s3-right {
            padding-left: 15px;
            width: 38.4%;
        }
            #content .ip-ad-git .section-title {
                margin-bottom: 32px;
            }
            .ip-ad-git {
                /*width: 530px;*/
                width: 100%;
                background: #000;
                text-align: center;
                padding: 61px 69px 70px;
            }
                #content .ip-ad-git p {
                    margin: 0 auto;
                    font-size: 24px;
                    line-height: 28px;
                    color: #e1e1e1;
                    max-width: 360px;
                }
                #content .ip-ad-git form {
                    position: relative;
                }
                    #content .ip-ad-git form p {
                        margin-bottom: 27px;
                    }
                .ip-ad-git div.wpcf7 {
                    margin-top: 46px;
                }
                .ip-ad-git span.wpcf7-list-item {
                    font-size: 24px;
                    letter-spacing: .05em;
                    line-height: 1;
                    color: #e1e1e1;
                    text-transform: uppercase;
                    position: relative;
                    margin-left: 0;
                    margin: 0;
                    cursor: pointer;
                }
                    .ip-ad-git span.wpcf7-list-item input {
                        display: none;
                    }
                    .ip-ad-git span.wpcf7-list-item input:checked + span.wpcf7-list-item-label:before {
                        background: #debf89;
                    }
                    .ip-ad-git span.wpcf7-list-item-label {
                        cursor: pointer;
                    }
                        .ip-ad-git span.wpcf7-list-item-label:before {
                            content: '';
                            display: inline-block;
                            vertical-align: top;
                            width: 23px;
                            height: 23px;
                            border-radius: 50%;
                            border: 5px solid #4c4c4c;
                            background: #4c4c4c;
                            margin-right: 18px;
                        }
                    #lookin-to {
                        max-width: 247px;
                        margin: 0 auto 52px;
                        display: flex;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        -webkit-box-pack: justify;
                            -ms-flex-pack: justify;
                                justify-content: space-between;
                    }
                    #contact-preference {
                        display: block;
                        margin-bottom: 21px;
                    }
                        .ip-ad-git #contact-preference span.wpcf7-list-item-label:before {
                            display: none;
                        }
                        .ip-ad-git #contact-preference span.wpcf7-list-item input:checked + span.wpcf7-list-item-label {
                            color: #debf89;
                        }
                        .ip-ad-git #contact-preference span.wpcf7-list-item {
                            padding: 0 24px;
                        }
                            .ip-ad-git #contact-preference span.wpcf7-list-item.first {
                                padding-left: 0;
                            }
                            .ip-ad-git #contact-preference span.wpcf7-list-item.last {
                                padding-right: 0;
                            }
                            .ip-ad-git #contact-preference span.wpcf7-list-item:nth-child(2) {
                                border: 1px solid #404040;
                                border-top: none;
                                border-bottom: none;
                            }
                .ip-ad-git-field {
                    position: relative;
                    margin-bottom: 12px;
                    vertical-align: top;
                }
                .ip-ad-git-field.ip-ad-git-field-half {
                    display: inline-block;
                    width: 50%;
                }
                .ip-ad-git-field.ip-ad-git-field-left {
                    padding-right: 6px;
                }
                .ip-ad-git-field.ip-ad-git-field-right {
                    padding-left: 6px;
                }
                .ip-ad-git-field.ip-ad-git-field-2 .wpcf7-form-control-wrap {
                    display: inline-block;
                    vertical-align: top;
                    width: calc(50% - 6px);
                }
                    .ip-ad-git-field.ip-ad-git-field-2 .wpcf7-form-control-wrap:first-child {
                        margin-right: 6px;
                    }
                    .ip-ad-git-field.ip-ad-git-field-2 .wpcf7-form-control-wrap:last-child {
                        margin-left: 6px;
                    }
                    .ip-ad-git-field input[type="text"],
                    .ip-ad-git-field input[type="email"],
                    .ip-ad-git-field input[type="tel"],
                    .ip-ad-git-field textarea {
                        width: 100%;
                        height: 62px;
                        background: #212121;
                        font-size: 14px;
                        letter-spacing: .24em;
                        color: #a5a5a5;
                        text-transform: uppercase;
                        border: none;
                        outline: none;
                        padding-left: 24px;
                        padding-right: 24px;
                    }
                    .ip-ad-git-field textarea {
                        height: 153px;
                        resize: none;
                        padding-top: 18px;
                    }
                    /*.ip-ad-git-field input[type="submit"] {
                        position: absolute;
                        width: 112px;
                        height: 53px;
                        border: none;
                        background: #DEBF89;
                        bottom: 13px;
                        right: 15px;
                        outline: none;
                        font-size: 20px;
                        padding: 10px 20px;
                        text-transform: uppercase;
                        background-image: url(images/send-button.jpg);
                        font-size: 0;
                    }*/
                    .ip-ad-git-field .git-submit{
                        position: absolute;
                        width: 112px;
                        height: 53px;
                        border: none;
                        background: #DEBF89;
                        bottom: 13px;
                        right: 15px;
                        outline: none;
                        font-size: 20px;
                        /* padding: 10px 20px; */
                        text-transform: uppercase;
                        /*background-image: url(images/send-button.jpg);*/
                        font-size: 0;
                    }

                    .ip-ad-git-field input[type="submit"]{
                        width: 100%;
                        height: 52px;
                        border: none;
                        background: #DEBF89;
                        outline: none;
                        text-transform: uppercase;
                        /* background-image: url(images/send-button.jpg); */
                        font-size: 0;
                        display: block;
                        padding: 10px 20px;
                        margin: 0;
                        font-size: 0;
                        border: none;
                        outline: none;
                        background-color: transparent;
                        position: relative;
                        z-index: 1;
                        bottom: auto;
                        right: auto;
                        transition: all 0.3s ease;
                    }

                    .ip-ad-git-field .submit-title {
                        width: 100%;
                        display: inline-block;
                        vertical-align: middle;
                        color: #000000;
                        font-size: 14px;
                        font-weight: 700;
                        text-align: center;
                        text-transform: uppercase;
                        position: absolute;
                        z-index: 2;
                        line-height: 53px;
                        letter-spacing: 0.26em;
                        pointer-events: none;
                        transition: all 0.3s ease;
                        left: 0;
                        top: 0;
                    }

                    .ip-ad-git-field .submit-title::before,
                    .ip-ad-git-field .submit-title::after{
                        width: 11px;
                        height: 1px;
                        content: '';
                        display: inline-block;
                        vertical-align: middle;
                        background-color: #000000;
                    }

                    .ip-ad-git-field .submit-title::before{
                        margin-right: 15px;
                    }
                    .ip-ad-git-field .submit-title::after{
                        margin-left: 15px;
                    }


                   .ip-ad-git-field .git-submit:hover{
                        background-color: #000000;
                   }

                   .ip-ad-git-field .git-submit:hover span.submit-title {
                        color: #ffffff;
                    }

                    .ip-ad-git-field .git-submit:hover span.submit-title:before, .ip-ad-git-field .git-submit:hover span.submit-title:after {
                        background-color: #ffffff;
                    }


            .ip-ad-git-field .ajax-loader {
                position: absolute;
                top: 100%;
                right: 0;
            }
            .ip-ad-git .wpcf7-response-output {
                margin: 0;
                position: absolute;
                left: 0;
                right: 0;
                top: 100%;
                color: #fff;
                margin-top: 10px;
                font-size: 14px;
            }
            .ip-ad-git .wpcf7-form-control-wrap {
                display: block;
            }
            .ip-ad-git .use-floating-validation-tip span.wpcf7-not-valid-tip {
                font-size: 14px;
            }

    .ip-agent-details-wrap .ip-about-section-4 .ip-title-wrap {
        margin-bottom: 47px;
    }
    .ip-agent-details-wrap .ip-about-section-3 {
        padding: 0;
    }
        .ip-agent-details-wrap .ip-about-section-3 .ip-title-wrap {
            margin-bottom: 50px;
        }

        .ip-agent-details-wrap .fp a:hover .fp-details {
            transform: translateY(60%);
        }
			
.testi a, .testi a:link, .testi a:visited {
	color: #DEBF89;
}

.single-aios-agents section.section-chv .ip-chv {
    margin-bottom: 0;
}

.ip-magazine {
    padding: 0 30px;
}

.ip-magazine-verbiage {
    font-size: 20px;
    line-height: 1;
    text-align: right;
    font-weight: 800;
    padding: 15px 0;
}

.ip-magazine canvas {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
}
/*Agent Details end*/

/*Properties*/
.ip-properties-wrap {

}

    .ip-properties-wrap {
        top: -128px;
        position: relative;
        overflow: hidden;
    }
    .ip-prop-section {
        position: relative;
    }
    .ip-prop-section-1 {
        z-index: 1;
    }
        .ip-prop-section-1 .container {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: start;
                -ms-flex-align: start;
                    align-items: flex-start;
        }
        .ip-prop-s1-left {
            width: 43%;
            /*padding-left: 140px;*/
            /*padding-left: 9.86%;*/
            padding-top: 87px;
            margin-top: 128px;
            position: relative;
        }
            #content .ip-prop-s1-left p {
                color: #303030;
            }
            .ip-prop-s1-left .accent-line.accent-red {
                width: 1000px;
                height: 1px;
                right: 100%;
                top: 67%;
                margin-right: 74px;
            }
                .ip-prop-s1-left .accent-line-dot {
                    left: initial;
                    right: -9px;
                }
        .ip-prop-s1-right {
            width: 57%;
            position: relative;
            padding-bottom: 82px;
        }
            .ip-prop-s1-right:after {
                content: '';
                position: absolute;
                height: 133px;
                background: #debf89;
                right: -1000px;
                left: 2%;
                bottom: 0;
            }
            .ip-prop-refine-search {
                /*max-width:  725px;*/
                width: 100%;
                /*margin-top: -128px;*/
                margin-top: 0;
                /*margin-left: 40px;*/
                margin-left: 6%;
                background: url(images/properties/bg-refine-search.jpg) center/cover no-repeat;
                position: relative;
                z-index: 1;
                padding: 30px 53px 30px;
            }
                .ip-prop-refine-search:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: -1;
                    background: rgba(7,7,7,.85);
                }
                .ip-prop-refine-search:after {
                    content: '';
                    position: absolute;
                    height: 133px;
                    background: #debf89;
                }
                .ip-prop-s1-right .section-parallax-a.section-parralax-flow-right.section-parralax-white {
                    right: -1000px;
                    top: 128px;
                    bottom: 51px;
                    left: 100%;
                }
                #content .ip-prop-refine-search .section-title {
                    color: #ede0cf;
                    font-size: 48px;
                    line-height: 1;
                    letter-spacing: .02em;
                    text-align: center;
                    margin-bottom: 5px;
                }
                    .ip-prop-refine-search .section-title span {
                        font-size: 18px;
                        color: #fff;
                        margin-bottom: 6px;
                    }

                .ip-prop-refine-search-form {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                        flex-wrap: wrap;
                    font-size: 0;
                    letter-spacing: 0;
                }
                    .ip-prop-rs-field {
                        width: 50%;
                        padding: 0 19px;
                        margin-bottom: 6px;
                    }
                        .ip-prop-rs-field label,
                        .ip-prop-rs-field .min-price,
                        .ip-prop-rs-field .max-price,
                        .ip-prop-rs-field select {
                            font-size: 14px;
                            letter-spacing: .24em;
                            line-height: 1;
                            color: #fff;
                            text-transform: uppercase;
                        }
                        .ip-prop-rs-field label {
                            display: block;
                            margin-top: 16px;
                            margin-bottom: 15px;
                        }
                        .ip-prop-rs-field select {
                            display: block;
                            width: 100%;
                            background: transparent url(images/properties/icon-arrow-down.png) 96% 55% no-repeat;
                            border: none;
                            border-bottom: 1px solid #696969;
                            height: 47px;
                            outline: none;
                            -webkit-appearance: none;
                            appearance: none;
                        }
                            .ip-prop-rs-field select::-ms-expand {
                                display: none;
                            }
                            .ip-prop-rs-field select option {
                                color: #000;
                            }
                        .ip-prop-rs-field .min-price,
                        .ip-prop-rs-field .max-price {
                            width: 50%;
                            display: inline-block;
                            vertical-align: top;
                            margin-top: 11px;
                        }
                            .ip-prop-rs-field .max-price {
                                text-align: right;
                            }

                        #slider-price.ui-slider {
                            height: 2px;
                            width: 100%;
                            background: #696969;
                            position: relative;
                        }
                            #slider-price.ui-slider .ui-slider-range {
                                height: 100%;
                                background: #debf89;
                                position: absolute;
                            }
                            #slider-price.ui-slider .ui-slider-handle {
                                background: #debf89;
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                display: block;
                                position: absolute;
                                top: 50%;
                                transform: translate(-50%,-50%);
                                outline: none;
                            }
                    .ip-prop-refine-search-form .btn-a {
                        display: block;
                        background: transparent;
                        margin: 18px auto 0;
                        width: 127px;
                        padding: 10.5px 0;
                    }
                        .ip-prop-refine-search-form .btn-a:hover {
                            background: #debf89;
                        }
    .ip-prop-section-2 {

    }
        .ip-prop-section-2 .container {
            position: relative;
        }
            .ip-prop-section-2 .section-parallax-a {
                bottom: 0;
                top: 58.6%;
                left: 90%;
                right: -1000px;
            }
        .ip-prop-list {
            letter-spacing: 0;
            font-size: 0;
            margin-top: 13px;
        }
            .ip-prop-list .fp {
                width: 50%!important;
            }
                .ip-prop-list .fp-img canvas {
                    height: 497px!important;
                }
        #content .ip-prop-section-2 .ip-custom-pagination {
            margin-top: -1px;
            width: 41%;
            /*margin-right: 128px;*/
            margin-right: 9%;
            padding: 34px 3.4% 38px;
            z-index: 1;
            position: relative;
        }
/*Properties end*/

/*properties details page start*/

.page-template-template-property-details-main .ip-banner-wrap{
    display: none;
}
    
    .ip-listings-main-slider-holder {
        position: relative;
    }

    .ip-listing-photo-item canvas{
        display: block;
        width: 100%;
        background: #000;
        opacity: .2;
        height: 100vh;
    }

        .ip-listing-photo-item{
            position: relative;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

            .page-template-template-property-details-main .breadcrumb-container {
                bottom: 24px;
            }

                .ip-listing-details-arrow {
                    position: absolute;
                    bottom: 3px;
                    right: 0;
                    background: rgba(0, 0, 0, 0.8);
                    width: 215px;
                    text-align: center;
                    padding: 27.5px 0;
                }

                    .ip-listing-details-arrow span{
                        font-family: 'PT Sans Narrow', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #fff;
                        text-transform: uppercase;
                        letter-spacing: 2.8px;
                        cursor: pointer;
                        display: inline-block !important;
                    }

                        .ip-listing-details-arrow span em {
                            width: 24px;
                            height: 24px;
                            display: inline-block;
                            vertical-align: unset;
                            border: solid 1px rgba(222, 191, 137, 0.29);
                            border-radius: 100%;
                            color: #debf89;
                            font-size: 11px;
                            padding-top: 6px;
                        }

                            span.ip-ld-prev em::before {
                                right: -1px;
                                position: relative;
                            }

                                span.ip-ld-next em::before {
                                    left: 2px;
                                    position: relative;
                                }

                            .ip-listing-details-arrow span:hover{
                                color: #debf89;
                            }

                        .ip-listing-details-arrow span:hover em{
                            background: #debf89;
                            color: #000;
                            border: solid 1px #debf89;
                        }

                    .ip-listing-details-arrow .fp-divider {
                        display: inline-block;
                        vertical-align: middle;
                        width: 1px;
                        height: 22px;
                        background: #a3844f;
                        opacity: .54;
                        margin-left: 4px;
                        margin-right: 8px;
                    }

                .ip-listing-photo-slick-slider .slick-slide div {
                    height: 100% !important;
                }

            .ip-ld-title {
                font-size: 80px;
                color: #832920;
                text-transform: uppercase;
                font-family: 'Cormorant Garamond', serif;
                letter-spacing: 1.5px;
                line-height: 1;
                margin-bottom: 34px;
            }

                .ip-ld-address {
                    /*font-size: 36px;*/
                    font-size: 32px;
                    color: #832920;
                    font-family: 'Cormorant Garamond', serif;
                    letter-spacing: 2px;
                    line-height: 1.23;
                    margin-bottom: 48px;
                }

                .ip-ld-address .address-holder {
                    color: #000;
                }

                    .ip-ld-p {
                        padding-right: 60px;
                    }

                        .ip-ld-p p {
                            font-size: 19px !important;
                            color: #303030 !important;
                            font-family: 'PT Sans Narrow', sans-serif;
                        }

                    .ip-ld-text .accent-line.accent-red {
                        width: 1000px;
                        height: 1px;
                        right: 100%;
                        top: 42px;
                        margin-right: 62px;
                    }

                .ip-ld-text .accent-line-dot {
                    left: initial;
                    right: -9px;
                }

            .ip-ld-text {
                position: relative;
            }

.ip-ld-specs-content{
    width: calc((100vw - 1140px) / 2 + 100%);
    margin-top: 14px;
    /*padding-bottom: 133px;*/
    padding-bottom: 30px;
    position: relative;
}

    .ip-ld-specs-content::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: -30px;
        width: calc(100% + 30px);
        height: 133px;
        background: #debf89;
        z-index: 1;
    }

    .ip-ld-specs {
        max-width: 500px;
        background: #000;
        position: relative;
        text-align: center;
        padding-bottom: 52px;
    }

        .ip-ld-price {
            font-size: 48px;
            color: #fff;
            font-family: 'PT Sans Narrow', sans-serif;
            letter-spacing: 1px;
        }

            .ip-ld-neighborhood{
                font-size: 24px;
                color: #fff;
                font-family: 'PT Sans Narrow', sans-serif;
                text-transform: uppercase;
                line-height: 1.3;
                margin-bottom: 26px;
            }

                .ip-ld-neighborhood span{
                    color: #debf89;
                }

                    .ip-ld-specs-info {
                        font-size: 22px;
                        color: #fff;
                        text-transform: uppercase;
                        font-family: 'PT Sans Narrow', sans-serif;
                    }

                        .ip-ld-specs-info em{
                            font-style: normal !important;
                            font-size: 15px;
                        }

                    span.ip-ld-specs-border img {
                        margin: 0 auto !important;
                    }

                span.ip-ld-specs-border {
                    display: block !important;
                }

            span.ip-ld-specs-divider {
                width: 1px;
                height: 103px;
                background: #545454;
            }

        .ip-ld-specs-info span {
            display: inline-block;
            vertical-align: middle;
            line-height: 1
        }

        span.ip-ld-specs-border.top {
            margin-bottom: 34px;
        }

            span.ip-ld-specs-border.bottom {
                margin-top: 34px;
                margin-bottom: 33px;
            }

                .ip-ld-specs-info span img {
                    margin: 6px auto 0;
                }

                    span.spec-list {
                        width: 155px;
                    }

                .ip-ld-specs::after{
                    content: '';
                    position: absolute;
                    top: 0 ;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url(images/listing-details/specs-bg.jpg) no-repeat;
                    background-position: center;
                    background-size: cover;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);
                    opacity: .12;
                }

            .ip-ld-specs-inner{
                position: relative;
                z-index: 5;
                padding-top: 40px;
            }

        .ip-listing-details-content {
            padding-top: 76px;
        }

            a.wv-link {
                font-size: 19px;
                font-weight: 700;
                color: #4f4f4f;
                font-family: 'PT Sans Narrow', sans-serif;
                float: right;
            }

            a.wv-link:hover{
                    color: #832920;
            }

                a.wv-link span{
                    border-bottom: solid 1px #4f4f4f;
                }

                a.wv-link:hover span{
                    border-color: #832920;
                }

                a.wv-link img {
                    display: inline-block;
                    vertical-align: middle;
                }

                    .ip-specs-right-bg {
                        position: absolute;
                        top: -90px;
                        left: calc(100% - 125px);
                        width: 200%;
                        height: calc(100% + 90px);
                        background: #fff;
                        z-index: -1;
                    }

                        .ip-specs-right-bg::after{
                            content: '';
                            position: absolute;
                            top: 0 ;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                   /* background-position: left center;
                    background-size: auto 100%;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);*/
                            opacity: .2;
                        }

.ip-listing-details-cta {
    /*padding: 50px 0 63px;*/
        padding: 20px 0 40px;
}

    .ip-ld-cta-list a {
        display: block;
        text-align: center;
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 700;
        color: #000;
        border: solid 2px #b4b4b4;
        height: 75px;
        line-height: 75px;
        font-family: 'PT Sans Narrow', sans-serif;
        letter-spacing: 6px;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        background: transparent;
        max-width: 360px;
        margin: 30px auto;
    }

        .ip-ld-cta-list a span{
            position: relative;
        }

            .ip-ld-cta-list a span::after,
            .ip-ld-cta-list a span::before{
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                width: 11px;
                height: 1px;
                margin: auto;
                background: #b4b4b4;
            }

                .ip-ld-cta-list a span::before{
                    left: calc(100% + 6px);
                }

                    .ip-ld-cta-list a span::after{
                        right: calc(100% + 12px);
                    }


                        .ip-ld-cta-list.cta2-ld a,
                        .ip-ld-cta-list.cta3-ld a{
                            letter-spacing: 4.5px;
                        }

                            .ip-ld-cta-list a:hover{
                                border: solid 2px #debf89;
                                background: #debf89;
                            }
 
 .ip-ld-video-area {
    background: #fff;
    padding: 0 45px 104px;
    width: calc(100% + 30px);
    position: relative;
    margin-left: -15px;
}  

     .ip-ld-video-area::after{
        content: '';
        position: absolute;
        bottom: 0 ;
        left: 0;
        width: 100%;
        height: 200px;
        background: #debf89;
     }   

        .ip-ld-video-inner {
            position: relative;
            z-index: 5;
        }   

            .ip-ld-video-bg-left,
            .ip-ld-video-bg-right{
                position: absolute;
                bottom: 0;
                width: 200%;
                height: calc(100% - 100px);
            }   

                .ip-ld-video-bg-left{
                    right: 100%;
                    background: #070707;
                } 

                    .ip-ld-video-bg-right{
                        left: 100%;
                        background: #fff;
                    }   

                        .ip-ld-video-bg-left::after{
                            content: '';
                            position: absolute;
                            top: 0 ;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                   /* background-position: left center;
                    background-size: auto 100%;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);*/
                            opacity: .2;
                        }  

                    .ip-ld-video-bg-right::after{
                        content: '';
                        position: absolute;
                        top: 0 ;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                   /* background-position: left center;
                    background-size: auto 100%;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);*/
                        opacity: .2;
                    } 

.ip-listing-details-photo-thumbnails {
    /*padding-top: 94px;*/
    padding-top: 30px;
    }

    .ip-ld-thumbnails-holder {
        font-size: 0;
        position: relative;
    }

        .ip-ld-thumb-list {
            display: inline-block;
            vertical-align: bottom;
            padding: 2px;
        }   

            .ip-ld-thumb-list.ld-thumb1, .ip-ld-thumb-list.ld-thumb4 {
                width: 58%;
            } 

                .ip-ld-thumb-list.ld-thumb2, .ip-ld-thumb-list.ld-thumb3 {
                    width: 42%;
                } 

                    .ip-ld-thumb-area {
                        margin: 0 -140px;
                        position: relative;
                        z-index: 5;
                    }

                        .ip-ld-thumb{
                            -webkit-filter: grayscale(100%);
                            filter: grayscale(100%);
                            -webkit-transition: all 0.4s ease-in-out;
                            -moz-transition: all 0.4s ease-in-out;
                            -o-transition: all 0.4s ease-in-out;
                            transition: all 0.4s ease-in-out;
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                        }

                            .ip-ld-thumb-list a{
                                display: block;
                            }

                                .ip-ld-thumb-list a:hover .ip-ld-thumb{
                                    -webkit-filter: grayscale(0);
                                    filter: grayscale(0);
                                }

                            .ip-listing-details-thumb-arrow {
                                position: relative;
                                background: #debf89;
                                max-width: 360px;
                                text-align: center;
                                padding: 27.5px 0;
                                margin: -2px -15px 0 auto;
                            }

                                .ip-listing-details-thumb-arrow span{
                                    font-family: 'PT Sans Narrow', sans-serif;
                                    font-size: 14px;
                                    font-weight: 700;
                                    color: #000;
                                    text-transform: uppercase;
                                    letter-spacing: 2.8px;
                                    cursor: pointer;
                                    display: inline-block !important;
                                    vertical-align: middle;
                                }

                                    .ip-listing-details-thumb-arrow span em {
                                        width: 24px;
                                        height: 24px;
                                        display: inline-block;
                                        vertical-align: unset;
                                        border: solid 1px rgba(131, 41, 32, 0.29);
                                        border-radius: 100%;
                                        color: #832920;
                                        font-size: 11px;
                                        padding-top: 6px;
                                    }

                                        span.ip-ld-thumb-prev em::before {
                                            right: -1px;
                                            position: relative;
                                        }

                                            span.ip-ld-thumb-next em::before {
                                                left: 2px;
                                                position: relative;
                                            }

                                        .ip-listing-details-thumb-arrow span:hover{
                                            color: #fff;
                                        }

                                    .ip-listing-details-thumb-arrow span:hover em{
                                        background: #fff;
                                        color: #000;
                                        border: solid 1px #fff;
                                    }

                                .ip-listing-details-thumb-arrow .fp-thumb-divider {
                                    display: inline-block;
                                    vertical-align: middle;
                                    width: 1px;
                                    height: 22px;
                                    background: #a3844f;
                                    opacity: .54;
                                    margin-left: 9px;
                                    margin-right: 11px;
                                }

                            .ip-ld-thumb-right-bg{
                                position: absolute;
                                bottom: 0;
                                left: 100%;
                                width: 200%;
                                height: calc(100% - 227px);
                                background: #070707;
                            }

                        .ip-ld-thumb-right-bg::after{
                            content: '';
                            position: absolute;
                            top: 0 ;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                   /* background-position: left center;
                    background-size: auto 100%;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);*/
                            opacity: .2;
                        } 

                    .ip-ld-thumb-list a canvas {
                        display: block;
                        width: 100%;
                    }

                .ip-ld-thumb-area::after {
                    content: '';
                    position: absolute;
                    top: -2px;
                    right: 3px;
                    width: 15%;
                    height: 100%;
                    background: #fff;
                    z-index: -1;
                }

.ip-listing-details-map{
    padding-top: 97px;
}

    .ip-ld-map-main{
        position: relative;
    }

        .ip-ld-map-area {
            margin: 0 -140px;
            position: relative;
            z-index: 5;
        }

            .ip-ld-map-bottom-bg {
                height: 130px;
                width: 40.5%;
                background: #debf89;
                position: relative;
                margin-top: -10px;
            }

                .ip-ld-map-left-bg{
                    position: absolute;
                    bottom: 0;
                    right: 100%;
                    width: 200%;
                    height: calc(100% - 110px);
                    background: #070707;
                }

            .ip-ld-map-left-bg::after{
                content: '';
                position: absolute;
                top: 0 ;
                left: 0;
                width: 100%;
                height: 100%;
                background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                   /* background-position: left center;
                    background-size: auto 100%;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);*/
                opacity: .2;
            } 

        .map-label-overlay {
            position: absolute;
            top: 48%;
            right: 16%;
            z-index: 5;
            background: rgba(0, 0, 0, 0.95);
            padding: 21px 27px 32px;
        }

            .ip-map-label{
                font-family: 'Cormorant Garamond', serif;
                font-size: 30px;
                color: #fff;
                text-transform: uppercase;
            }

                .ip-map-label span{
                    font-size: 18px;
                    display: block;
                }

                    span.map-border-accent {
                        width: 100%;
                        height: 1px;
                        background: #3e3e3e;
                    }

                        span.map-border-accent {
                            width: calc(100% + 70px);
                            height: 1px;
                            background: #3e3e3e;
                            position: relative;
                            left: -70px;
                            margin: 2px 0 8px;
                        }

                    span.map-border-accent span{
                        width: 18px;
                        height: 18px;
                        display: block;
                        position: absolute;
                        top: -9px;
                        left: -9px;
                    }

                span.map-border-accent span::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 1px solid rgba(0,0,0,.29);
                }

                    span.map-border-accent span::after {
                        content: '';
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        background: #000;
                        display: block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        margin: auto;
                    }

.ip-listing-details-agent-main {
    position: relative;
    margin: 0 -15px;
    z-index: 5;
}

    .ip-listing-details-agent-area {
        background: #fff;
        max-width: 884px;
        margin: 54px auto 0;
        font-size: 0;
    }

        .ip-ld-agent-photo {
            /*width: 55%;*/
            width: 35%;
            margin-top: 35px;
            display: inline-block;
            vertical-align: top;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

            .ip-ld-agent-photo canvas {
                display: block;
                width: 100%;
            }

                .ip-ld-agent-info {
                    display: inline-block;
                    vertical-align: top;
                    /*width: 45%;*/
                    width: 65%;
                    padding-left: 70px;
                    padding-top: 27px;
                }

                    .ip-ld-agent-name {
                        font-size: 48px;
                        color: #363636;
                        text-transform: uppercase;
                        font-family: 'PT Sans Narrow', sans-serif;
                        letter-spacing: 1px;
                        line-height: 1;
                        margin-bottom: 11px;
                    }

                        .ip-ld-agent-dre {
                            font-size: 24px;
                            color: #363636;
                            text-transform: uppercase;
                            font-family: 'PT Sans Narrow', sans-serif;
                            letter-spacing: .7px;
                            line-height: 1;
                            margin-bottom: 57px;
                        }

                            .ip-ld-agent-contacts span,
                            .ip-ld-agent-contacts span a{
                                color: #313131;
                                /*font-size: 30.5px;*/
                                font-size: 24px;
                                font-family: 'PT Sans Narrow', sans-serif;
                                line-height: 1;
                            }

                                .ip-ld-agent-contacts span{
                                    display: block;
                                    /*margin-bottom: 23px;*/
                                    margin-bottom: 10px;
                                }

                            .ip-ld-agent-contacts em.ai-font-phone {
                                font-size: 25px;
                                color: #debf89;
                                width: 30px;
                                margin-right: 6px;
                                display: inline-block;
                            }

                        .ip-ld-agent-contacts em.ai-font-envelope-f {
                            font-size: 18px;
                            color: #debf89;
                            width: 30px;
                            margin-right: 6px;
                            display: inline-block;
                        }

                    .ip-ld-agent-link a {
                        display: block;
                        text-align: center;
                        font-size: 14px;
                        text-transform: uppercase;
                        font-weight: 700;
                        color: #000;
                        border: solid 2px #b4b4b4;
                        height: 53px;
                        line-height: 53px;
                        font-family: 'PT Sans Narrow', sans-serif;
                        letter-spacing: 3.5px;
                        -webkit-transition: all 0.4s ease-in-out;
                        -moz-transition: all 0.4s ease-in-out;
                        -o-transition: all 0.4s ease-in-out;
                        transition: all 0.4s ease-in-out;
                        background: transparent;
                        max-width: 187px;
                        margin: 30px 0;
                    }

                        .ip-ld-agent-link a span{
                            position: relative;
                        }

                            .ip-ld-agent-link a span::after,
                            .ip-ld-agent-link a span::before{
                                content: '';
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                width: 11px;
                                height: 1px;
                                margin: auto;
                                background: #b4b4b4;
                            }

                                .ip-ld-agent-link a span::before{
                                    left: calc(100% + 6px);
                                }

                                    .ip-ld-agent-link a span::after{
                                        right: calc(100% + 12px);
                                    }

                                        .ip-ld-agent-link a:hover{
                                            border: solid 2px #debf89;
                                            background: #debf89;
                                        }

                                    .ip-ld-agent-contacts span a:hover{
                                        color: #debf89;
                                    }

                                .ip-listing-details-agent-main .ip-title {
                                    text-align: right;
                                    display: block;
                                    padding: 0 15px;
                                }

                            .ip-listing-details-agent-main .ip-title .section-title {
                                display: inline-block;
                                position: relative;
                            }

                        .ip-listing-details-agent-main .accent-line {
                            top: auto;
                            bottom: 38px;
                        }

                    .ip-listing-details-agent-main .ip-title .accent-line.accent-red {
                        width: 2000px;
                        height: 1px;
                        right: 100%;
                        margin-right: 57px;
                    }

                .ip-listing-details-agent-main .accent-line-dot {
                    left: auto;
                    right: -12px;
                }

            .ip-listing-details-agent {
                padding-top: 58px;
            }

            .ip-ld-agent-bottom-bg {
                height: 127px;
                width: 100%;
                background: #debf89;
                position: relative;
                margin-top: 90px;
            }

                .ip-ld-agent-left-bg{
                    position: absolute;
                    bottom: 0;
                    right: 100%;
                    width: 200%;
                    height: calc(100% - 76px);
                    background: #fff;
                }

                    .ip-ld-agent-left-bg::after{
                        content: '';
                        position: absolute;
                        top: 0 ;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                       /* background-position: left center;
                        background-size: auto 100%;
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);*/
                        opacity: .2;
                    } 

                .ip-ld-agent-right-bg{
                    position: absolute;
                    bottom: 0;
                    left: 100%;
                    width: 200%;
                    height: calc(100% - 163px);
                    background: #070707;
                }

                    .ip-ld-agent-right-bg::after{
                        content: '';
                        position: absolute;
                        top: 0 ;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                       /* background-position: left center;
                        background-size: auto 100%;
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);*/
                        opacity: .2;
                    } 

    .page-template-template-property-details-main .ip-about-section.ip-about-section-4 .ip-title-wrap,
    .page-template-template-property-details-alt .ip-about-section.ip-about-section-4 .ip-title-wrap {
        text-align: left;
    }

        .page-template-template-property-details-main .ip-about-section.ip-about-section-4,
        .page-template-template-property-details-alt .ip-about-section.ip-about-section-4 {
            padding-top: 104px;
        }

            .page-template-template-property-details-alt .ip-about-section.ip-about-section-4{
                text-align: left;
            }

                .page-template-template-property-details-alt .ip-about-section-4 .section-parallax-a.section-parralax-flow-left {
                    right: 90%;
                    top: 263px;
                    bottom: 0;
                }

                    .page-template-template-property-details-alt #content .ip-about-sold-listing-dots.ip-custom-pagination {
                        margin-left: -15px;
                        margin-right: auto;
                        padding-right: 163px;
                        text-align: left;
                    }

/*alt lisitng detials*/
.ip-ld-alt-large-photo,
.ip-ld-alt-small-photo {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
    .ip-ld-alt-large-photo canvas,
    .ip-ld-alt-small-photo canvas{
        display: block;
        width: 100%;
    }

        .ip-ld-alt-slider-inner {
            position: relative;
            width: calc(100% + 74px);
            z-index: 5;
            background: #fff;
            left: 67px;
        }

            .ip-alt-thumb-list {
                padding: 0 1.5px;
            }

                .ip-ld-alt-small-photo {
                    max-width: 155px;
                    margin: 0 auto;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);
                }

                .ip-ld-alt-slider-holder .ip-listing-details-arrow {
                    position: relative;
                    bottom: 0;
                    background: #debf89;
                    max-width: 345px;
                    width: 100%;
                    margin: 0 -15px 0 auto;
                    padding: 51.5px 0;
                }

                    .ip-ld-alt-slider-holder .ip-listing-details-arrow span{
                        color: #000;
                    }

                        .ip-ld-alt-slider-holder .ip-listing-details-arrow span em {
                            border: solid 1px rgba(66, 25, 21, 0.29);
                            color: #832920;
                        }

                .ip-ld-alt-thumb-photo .slick-slide.slick-current.slick-active .ip-ld-alt-small-photo{
                    -webkit-filter: grayscale(0);
                    filter: grayscale(0);
                }

                    .ip-ld-alt-thumb-photo {
                        margin: 0 -1.5px;
                    }

                .ip-ld-alt-main-photo .slick-slide div,
                .ip-ld-alt-thumb-photo .slick-slide div {
                    height: 100% !important;
                    display: block !important;
                }

            .ip-ld-alt-slider-holder {
                position: relative;
                padding-top: 127px;
            }

                .ip-ld-alt-slider-bg-right {
                    position: absolute;
                    top: -76px;
                    left: calc(100% + 15px);
                    width: 200%;
                    height: calc(100% + 166px);
                    background: #070707;
                }

                    .ip-ld-alt-slider-bg-right::after{
                        content: '';
                        position: absolute;
                        top: 0 ;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                       /* background-position: left center;
                        background-size: auto 100%;
                        -webkit-filter: grayscale(100%);
                        filter: grayscale(100%);*/
                        opacity: .2;
                    } 

                .page-template-template-property-details-alt .ip-ld-p {
                    padding-right: 0;
                }
                

/*properties details page end*/


/*** Communities details page ***/
.single-neighborhood #inner-page-wrapper > .container {
    padding: 0;
    width: 100%;
}
.ip-comm-wrap {
    position: relative;
}

    .ip-comm-section {
        /*overflow: hidden;*/
    }

    .ip-comm-section-1 {
        padding: 112px 0 0; 
        position: relative;
    }

.ip-comm-section-1 .container {
    position: relative;
}    

.ip-comm-p-bg .section-parallax-a.section-parralax-flow-left.section-parralax-white {
    top: -112px;
    bottom: 0;
    right: 100%;
    left: -1000px;
}

.ip-comm-p-bg .section-parallax-a.section-parralax-flow-right {
    left: 90%;
    top: 259px;
    bottom: 0;
    right: -1000px;
}


 .comm-text-details {
    position: relative;
    text-align: center;
 }

   .ip-comm-section-1 p.p-width{ 
     width: 80%; 
     margin: 1.5em auto !important;

   }
   
   .comm-text-details .accent-line.accent-red {
    width: 1000px;
    height: 1px;
/*    right: 70%;
    top: 12%;
    margin-right: 72px;*/
    right: 100%;
    top: 50%;    
    margin-right: 30px;    
   }
   .ip-comm-wrap .ip-about-section-3 .accent-line.accent-red {
        margin-right: 30px;
   }

    .comm-text-details .accent-line-dot {
    left: initial;
    right: -9px;
}

    .ip-comm-section-2 {
        padding:0; 
        position: relative;
    }

 .ip-comm-section-2 .container {
    max-width: 1424px; 
    width: 100%;
 } 


 .comm-image-cont {
    position: relative;
 }


  .comm-img-wrapp {
     position: relative; 
     z-index: 1; 
     padding-bottom: 120px;
  }

    .comm-img-wrapp:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 125px;
    left: 165px;
    left: 23%;
    background: #debf89;
    height: 120px;
    }  

   .comm-img-wrapp canvas {
     width: 100%; 
     background-size: cover;
     display: block;
   }


  .comm-details-about p { 

     padding-right: 80px;

  }

   .comm-image-cont .section-parralax-flow-right {
    right: -1000px;
    top: 20%;
    bottom: 0;
    left: calc(100% - 125px );
   }
    .ip-comm-details-listing-list .fp {
        width: 33.3333333%!important;
    }

    .ip-comm-details-listing-list .fp-img canvas {
        height: 320px!important;
    }
    #content .ip-comm-section .ip-custom-pagination {
        margin: -1px 0 0 98px;
        position: relative;
    }
        #content .ip-comm-section .ip-custom-pagination .custom-button-prev {
            display: none!important;
        }
        #content .ip-comm-section .ip-custom-pagination .custom-button-next {
            position: absolute;
            right: 75px;
        }
        .ip-comm-section .fp-address {
            font-size: 24px;
        }
        .single-neighborhood .ip-comm-section .fp-address {
            font-size: 19px;
            max-width: 80%;
            margin: 0 auto;
        }

        .single-neighborhood .fp-price{
            background: transparent;
        }


   .ip-comm-wrap .ip-title .section-title  {
      /*padding-left: 140px;*/
   }

    .ip-comm-wrap .ip-about-section-3 .accent-line.accent-red {
            /*right: 80%;*/
    }
	
/***** Explore LA Neighborhoods *****/
.ip-explore-la-wrap {
	position: relative;
	overflow: hidden;
}

.ip-explore-la-section-1 .section-parallax-a.section-parralax-flow-left.section-parralax-white {
	width: 13.45%;
	left: 0;
	top: 1px;
	bottom: 44.25%;
}

.ip-explore-la-section-2 .section-parallax-a.section-parralax-flow-right {
	left: 90%;
	top: 56.25%;
	bottom: 0;
	right: -1000px;
}

.ip-explore-la-section-2::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 121px;
    background: #debf89;
    /* width: 689px; */
    width: calc(34.333% - -12px);
    z-index: -1;
}

.ip-explore-la-section-1 .container, .ip-explore-la-list .container {
	position: relative;
	padding: 68px 15px 0;
	max-width: 100%;
	width: 1450px;
	max-width: 90.625%;
}

.ip-explore-la-list .container {	
	padding: 0 15px 78px;
	overflow:hidden;
}

#content .ip-explore-la-section-1 .ip-title-wrap p {
	max-width: 800px;
	margin: 1.5em auto;
	display: block;
}

.ip-explore-la-section-1 .accent-line.accent-red {
	width: 1000px;
	height: 1px;
	right: 100%;
	top: 66%;
	margin-right: 43px;
}

.ip-explore-la-section-1 .accent-line-dot {
	left: initial;
	right: -9px;
}

.ip-explore-la-list canvas {
	display: block;
	width: 100%;
	background-position: center;
	background-size: cover;		
}

.ip-explore-la-list a:hover .neigh-img canvas {
	-webkit-filter: grayscale(1);
	filter: grayscale(1);
}

.neigh-item {
	padding: 1px;
	position: relative;
}

.neigh-img {
	position: relative;
}

.neigh-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.2);
    z-index: 1;
}

.neigh-item a:hover .fp-details {
    bottom: 50%;
    transform: translateY(48.8%);
}


.neigh-details {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	z-index: 1;
	overflow: hidden;
	height: 100%;
	max-height: 84px;
	-webkit-transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
	-o-transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
	transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}

.neigh-item a:hover .neigh-details {
	height: 100%;
	max-height: 172px;
}

.neigh-address {
	display: block;
	width: 257px;
	height: 84px;
	margin: 0 auto;
	background: rgba(0,0,0,.7);
	font-size: 20px;
	letter-spacing: .1em;
	line-height: 84px;
	color: #fff;
	text-align: center;
	text-transform: uppercase;
}

.neigh-btn.btn-a {
	width: 257px;
	height: 83px;
	padding: 0;
	line-height: 83px;
	background: #debf89;
	border-color: #debf89;
	color: #000;
	position: relative;
	left: 0;
	right: 0;
	margin: 0 auto;	
}

.neigh-btn.btn-a span::before, .neigh-btn.btn-a span::after {
	background: #000;
}


/*Pre market*/
#ip-pre-market {

}
    #ip-pre-market .ip-title-wrap {
        padding: 87px 0 106px;
        position: relative;
        margin-bottom: 0;
    }
        #ip-pre-market .ip-title-wrap .section-parallax-a.section-parralax-flow-left.section-parralax-white {
            left: 0;
            top: 0;
            bottom: 0;
            /*width: 215px;*/
            width: 13.438%;
        }
        #ip-pre-market .accent-line.accent-red {
            height: 1px;
            width: 1000px;
            left: 100%;
            top: 67%;
            margin-left: 48px;
        }

    .ip-pm-section .new-container {
        position: relative;
    }
        .ip-pm-section-1 .section-parallax-a {
            top: 29.8%;
            bottom: 0;
            left: 90.15%;
            right: -1000px;
            z-index: 1;
        }

    .ip-pm-list {
        position: relative;
        z-index: 2;
    }
        .ip-pm:last-child{
            margin-bottom: 0;
        }
        .ip-pm {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 3px;
            overflow: visible!important;
        }
            .ip-pm-left,
            .ip-pm-right {
                position: relative;
                width: 50%;
                display: inline-block;
                vertical-align: top;
            }
            .ip-pm-left {
                padding-right: 70px;
                text-align: center;
            }
                #content .ip-pm-title {
                    margin: 0;
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 30px;
                    font-weight: 400;
                    line-height: 1;
                    letter-spacing: .02em;
                    color: #2a2a2a;
                    text-transform: uppercase;
                    margin-bottom: 58px;
                }

                .ip-pm-countdown {
                    min-height: 139px;
                    font: 400 48px/48px 'Cormorant Garamond', serif;
                    letter-spacing: .05em;
                    color: #832920;
                    text-transform: uppercase;
                }
                    .ip-pm-countdown .ClassyCountdown-wrapper {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                        .ip-pm-countdown .ClassyCountdown-wrapper > div {
                            /*width: 136px;
                            height: 136px!important;*/
                            position: relative;
                        }
                            .ip-pm-countdown .ClassyCountdown-wrapper > div > div {
                                display: block!important;
                                width: 100%!important;
                                height: 100%!important;
                            }
                                .ip-pm-countdown .ClassyCountdown-wrapper > div canvas {
                                    width: 100%!important;
                                    height: 100%!important;
                                    background: url(images/bg-clock-border.png) center/96% no-repeat;
                                }

                        .ip-pm-countdown .ClassyCountdown-wrapper > div > span {
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 50%;
                        }
                            .ip-pm-countdown .ClassyCountdown-wrapper > div > span > div {
                                font: 400 55px/48px 'Cormorant Garamond', serif;
                                letter-spacing: .05em;
                                color: #832920;
                                margin-top: -20px;
                                margin-bottom: 4px;
                            }
                            .ip-pm-countdown .ClassyCountdown-wrapper > div > span > span {
                                font: 19.88px/1 "PT Sans Narrow", sans-serif!important;
                                letter-spacing: .05em;
                                color: #303030;
                                text-transform: uppercase;
                            }

                .ip-pm-list .fp {
                    width: 100%!important;
                    padding: 0;
                }
                    .ip-pm-list .fp canvas {
                        height: 496px;
                    }

    #content #ip-pre-market ul.ip-pm-pagination {
        margin-top: 0;
        max-width: 100%;
        width: 50%;
        padding: 45px 9% 39px 3.4%;
        margin: 0 0 0 auto;
    }


/*Pre market end*/

/*screening room start*/
.ip-screen-video {
    padding-top: 87px;
    position: relative;
}

.ip-screen-vid-area {
    position: relative;
}  

     .ip-screen-vid-area .ip-screen-vid-inner::after{
        content: '';
        position: absolute;
        bottom: 0 ;
        left: 0;
        width: 100%;
        height: 200px;
        background: #debf89;
     }   

        .ip-screen-vid-inner iframe {
            position: relative;
            z-index: 6;
            height: 65vh;
        }

        .ip-screen-vid-inner {
            position: relative;
            z-index: 5;
            padding: 0 45px 35px;
            width: calc(100% + 30px);
            background: #fff;
            margin-left: -15px;
            margin-top: 77px;
        }   

            .ip-screen-vid-bg-left,
            .ip-screen-vid-bg-right{
                position: absolute;
                bottom: 0;
                width: 200%;
                height: calc(100%);
            }   

                .ip-screen-vid-bg-left{
                    right: 100%;
                    background: #070707;
                } 

                    .ip-screen-vid-bg-right {
                        left: calc(100%);
                        background: #fff;
                        height: calc(100% + 280px);
                    } 

                        .ip-screen-vid-bg-left::after{
                            content: '';
                            position: absolute;
                            top: 0 ;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                            opacity: .2;
                        }  

                    .ip-screen-vid-bg-right::after{
                        content: '';
                        position: absolute;
                        top: 0 ;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url(images/bg-parallax-b.jpg) fixed top center/cover no-repeat;
                        opacity: .2;
                    } 

                .ip-screen-vid-area .accent-line.accent-red {
                    bottom: 37px;
                    left: 360px;
                    width: 1000px;
                    height: 1px;
                }


            .ip-screen-vid-label {
                font-size: 12px;
                position: relative;
                z-index: 6;
                text-align: center;
                font-size: 24px;
                color: #000;
                text-transform: uppercase;
                letter-spacing: 2.5px;
                font-family: 'PT Sans Narrow', sans-serif;
                padding-top: 29px;
            }

        .ip-sr-vid-list {
            display: inline-block;
            vertical-align: top;
            padding: 1.5px;
            width: calc(100% / 3);
        }

            .ip-sr-vid-list a {
                display: block;
                position: relative;
            }

                .ip-sr-vid-photo {
                    /*background-size: cover;*/
                    background-size: 140% 140%;
                    background-position: center;
                    background-repeat: no-repeat;
                    position: relative;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);
                }

                    .ip-sr-vid-photo canvas {
                        display: block;
                        width: 100%;
                        height: 252px;
                    }

                        .ip-sr-vid-list a.sr-active .ip-sr-vid-photo{
                            -webkit-filter: grayscale(0);
                            filter: grayscale(0);
                        }

                            .ip-sr-vid-list a:hover .ip-sr-vid-photo{
                                -webkit-filter: grayscale(0);
                                filter: grayscale(0);
                            }

                        .ip-screen-vid-thumb-holder {
                            font-size: 0;
                            margin: 0 -140px;
                            position: relative;
                            text-align: center;
                        }

                            .ip-sr-vid-list.small-sr-vid{
                                width: 25%;
                            }

                                .ip-sr-vid-list.medium-sr-vid{
                                    width: 30.5%;
                                }

                                    .ip-sr-vid-list.large-sr-vid{
                                        width: 44.5%;
                                    }

                                        .ip-sr-vid-list a::after {
                                            content: "";
                                            width: 100%;
                                            height: 100%;
                                            position: absolute;
                                            top: 0;
                                            left: 0px;
                                            z-index: 2;
                                            background: linear-gradient(to top,rgba(0, 0, 0,1) 0, rgba(0,0,0,0) 50%);
                                            pointer-events: none;
                                        }

                                    .ip-sr-vid-label {
                                        position: absolute;
                                        bottom: 16px;
                                        left: 0;
                                        text-align: center;
                                        color: #fff;
                                        font-size: 16px;
                                        z-index: 5;
                                        width: 100%;
                                        text-transform: uppercase;
                                        letter-spacing: 1.5px;
                                        font-family: 'PT Sans Narrow', sans-serif;
                                        line-height: 1.2;
                                    }

                                .ip-sr-vid-list a::before {
                                    content: "";
                                    position: absolute;
                                    width: 68px;
                                    height: 49px;
                                    top: 0;
                                    left: 0px;
                                    bottom: 0;
                                    right: 0;
                                    margin: auto;
                                    z-index: 6;
                                    background: url(images/screen-room/sr-play-icon.png) no-repeat;
                                    background-size: contain;
                                    background-position: center;
                                }

                            .ip-screen-vid-thumb-area {
                                padding-top: 88px;
                            }

                        .in-the-press-area .ip-title {
                            display: block;
                            text-align: right;
                        }

                    .in-the-press-area .accent-line-dot {
                        left: auto;
                        right: -12px;
                    }

                    .in-the-press-area .accent-line.accent-red {
                        right: 293px;
                        left: auto;
                        width: 1200px;
                    }

                .in-the-press-area .ip-screen-vid-bg-left {
                    background: #fff;
                }

        .in-the-press-area .ip-screen-vid-bg-right {
            background: #070707;
            left: 100%;
        }

            .in-the-press-area {
                margin-top: 39px;
            }

                .page-template-template-screening-room footer.footer-wrapper {
                    padding: 54px 0 0;
                }

                    .page-template-template-screening-room .aiosp-iframe-holder .aiosp-content {
                        max-width: 1230px;
                        width: 92%;
                    }

                        .page-template-template-screening-room .aiosp-iframe-holder .aiosp-close {
                            top: -36px;
                            width: 30px;
                            height: 30px;
                            text-align: center;
                            border: solid 2px;
                            border-radius: 100%;
                            padding: 0;
                            line-height: 30px;
                        }

                            .page-template-template-screening-room .ip-banner-wrap {
                                position: relative;
                                z-index: 2;
                            }

                        .in-the-press-area .ip-screen-vid-bg-right {
                            height: calc(100%);
                        }

                    .page-template-template-screening-room .ip-title {
                        z-index: 6;
                    }


/*screening room start*/


.single-aios_agent #get-in-touch {
    display: none;
}



/*Popup*/
section.mir-popup-wrapper {
    position: fixed;
    bottom: -100%;
    z-index: 9;
    background: #fff;
    max-width: 310px;
    right: 90px;
    padding: 35px 10px 20px;
    border-top: 5px solid #debe89;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}

section.mir-popup-wrapper.active{
    bottom: 0;
}

.popup-title {
    font-family: 'Cormorant Garamond', serif;
    text-transform: uppercase;
    color: #832920;
    text-align: center;
    display: block;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 1.1;
}
.popup-title span {
    display: block;
    color: #212121;
    font-size: 21px;
}

.popup-holder .accent-line.accent-red {
    width: 97%;
    height: 1px;
    left: -10px;
    bottom: 0;
    margin-right: 55px;
    position: relative;
    display: block;
    margin: 30px 0;
}

.popup-holder .accent-line.accent-red i.accent-line-dot {
    left: unset;
    right: -9px;
}

.popup-form label {
    display: none;
}

.popup-form input#signup_email {
    width: 90%;
    margin: 0 auto;
    display: block;
    padding: 10px;
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: lowercase;
    font-family: "PT Sans Narrow", Arial, Helvetica, Georgia, sans-serif;
    border-width: 0.5px;
    border-style: solid;
    border-color: #a9a9a9;
    height: auto;
    background: transparent;
    color: #000;
}

.popup-form input#signup_email::placeholder{
    text-transform: uppercase;
}

.popup-form .signup-submit span.disclaimer {
    padding: 25px 0;
    display: block;
    position: relative;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    font-size: 15px;
    color: #000;
    line-height: 1;
    font-weight: normal;
    letter-spacing: 0;
    vertical-align: middle;
    text-transform: none;
}

.popup-form .signup-submit span:before, .popup-form .signup-submit span:after{
    display: none;
}

.popup-form .signup-submit {
    text-align: center;
    width: 100%;
    height: auto;
    position: relative;
    top: unset;
    right: unset;
}


.btn-holder {
    width: 100%;
    max-width: 160px;
    position: relative;
    margin: 0 auto;
}

.btn-holder:before {
    content: '';
    width: 15px;
    height: 1px;
    background: #212121;
    position: absolute;
    top: 36%;
    transform: translateY(-50%);
    left: 15px;
    z-index: 2;

    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
.btn-holder:after {
    content: '';
    width: 15px;
    height: 1px;
    background: #212121;
    position: absolute;
    top: 36%;
    transform: translateY(-50%);
    right: 15px;
    z-index: 2;

    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
.popup-form input.wpcf7-form-control.wpcf7-submit.site-easing {
    background: #debf89;
    border: navajowhite;
    padding: 15px 30px;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    width: 100%;
    font-weight: 800;
    color: #212121;
    font-size: 15px;
    height: auto;

    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}

.btn-holder:hover input.wpcf7-form-control.wpcf7-submit.site-easing{
    background: #212121;
    color: #fff;
}

.btn-holder:hover:after, 
.btn-holder:hover:before{
    background: #fff;
}

span.close-popup {
    font-size: 0;
    position: absolute;
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: block;
    top: 5%;
    right: 5%;
}

span.close-popup::before {
    content: '';
    width: 20px;
    height: 1px;
    background: #debf89;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-45deg);
}
span.close-popup::after {
    content: '';
    width: 20px;
    height: 1px;
    background: #debf89;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(45deg);
}

.popup-form span.wpcf7-form-control-wrap.signup-email > span {
    width: 80%;
    left: 10%;
}

.popup-form span.wpcf7-form-control-wrap.signup-email {
    width: 100%;
    display: block;
}

.popup-form div.wpcf7-response-output{
    margin: 0;
    text-align: center;
}

.popup-form .signup-field-wrap{
    width: 100%;
    height: unset;

}


.popup-form  .signup-submit span{
    position: relative;
}

.comm-text-details.animated.fadeInLeft.visible p {
    width: 80%;
    margin: 1.5em auto !important;
}





.smi-style-1{
    text-align: center;
}
    .smi-style-1 a{
        display: inline-block;
        vertical-align: top;

    }
        .smi-style-1 a span{
            width: 42px;
            height: 42px;
            background: #000;
            color: #fff;
            text-decoration: none;
            text-align: center;
            border-radius: 50%;
            display: block;
            font-size: 20px;
            margin: 5px 0;
        }
            .smi-style-1 a span:after{
                content: "";
                height: 100%;
                width: 0;
                display: inline-block;
                vertical-align: middle;
            }
            .smi-style-1 a span:before{
                display: inline-block;
                vertical-align: middle;
            }

        .smi-style-1 a.fb span{
            background: #4d6baa;
        }
        .smi-style-1 a.tw span{
            background: #4fc6f8;
        }
        .smi-style-1 a.yt span{
            background: #cd201f;
        }
        .smi-style-1 a.ln span{
            background: #0077b5;
        }
        .smi-style-1 a.gp span{
            background: #dc4e41;
        }
        .smi-style-1 a.pn span{
            background: #bd081c;
        }
        .smi-style-1 a.ig span{
            background: #3f729b;
        }
        .smi-style-1 a.fl span{
            background: transparent;
            border: 1px solid #e5e5e5;
            color: #000;
        }
        .smi-style-1 a.ar span{
            background: #f3a31e;
        }
        .smi-style-1 a.zl span{
            background: #1277e1;
        }
        .smi-style-1 a.yp span{
            background: #af0606;
        }
        .smi-style-1 a.tr span{
            background: #5eab1f;
        }
        .smi-style-1 a.fq span{
            background: #2d5be3;
        }
        .smi-style-1 a.vm span{
            background: #1ab7ea;
        }
        .smi-style-1 a.rs span{
            background: #f26522;
        }
        .smi-style-1 a.wps span{
            background: #21759b;
        }
        .smi-style-1 a.bg span{
            background: #0788ca;
        }
        .smi-style-1 a.tb span{
            background: #35465c;
        }
        .smi-style-1 a.bb span{
            background: #146696;
            font-size: 27px;
        }
        .smi-style-1 a.cm span{
            font-size: 27px;
        }
        .smi-style-1 a.hz span{
            background: transparent;
            border: 1px solid #e5e5e5;
            color: #000;
        }

        .aios-agents-template-default .smi-style-1 a span {
            color: #ede0cf;
            background-color: rgba(255,255,255,0.19);
        }
            .aios-agents-template-default .smi-style-1 a:hover span {
                color: #000000;
                background-color: #debf89;
            }


/* POPUP FORMS */
#pum-1733 .pum-container.pum-responsive.pum-responsive-medium,
#pum-1728 .pum-container.pum-responsive.pum-responsive-medium {
    width: 90% !important;
    max-width: 675px !important;
    left: 0 !important;
    right: 0 !important;
    margin: 0 auto;
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 60px 0 50px;
    background: #fff;
}
#pum-1733 .pum-close,
#pum-1728 .pum-close {
    color: #debf89;
    font-size: 40px;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    box-shadow: none;
    outline: none;
}
.ip_popup_form {
    position: relative;
    padding: 0 80px;
}
.ip_popup_form .modal-listings-paragraph {
    padding-bottom: 45px;
    color: #000000;
    font-size: 15px;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    text-transform: uppercase;
}
.ip_popup_form .accent-line.accent-red {
    width: 900px;
    height: 1px;
    right: 0;
    top: 65px;
    margin-right: 80px;
}
.ip_popup_form .accent-line-dot {
    left: auto;
    right: -9px;
}
.ip_popup_form .modal-listings-form {
    margin-top: 45px;
    color: #000000;
    font-size: 14px;
    text-transform: uppercase;
}
    .ip_popup_form .modal-listings-form .row {
        margin-bottom: 20px;
    }
    .ip_popup_form .modal-listings-form input,
    .ip_popup_form .modal-listings-form select,
    .ip_popup_form .modal-listings-form textarea {
        width: 100%;
        height: 52px;
        margin-top: 10px;
        padding: 0 10px;
        border: 1px solid #000000;
        outline: none;
        background: #fff;
    }
    .ip_popup_form .modal-listings-form textarea {
        resize: none;
        height: 71px;
        padding: 10px;
    }
    .ip_popup_form .modal-listings-form .popup_submit_btn {
        text-align: center;
    }
    .ip_popup_form .modal-listings-form input.wpcf7-submit {
        width: 162px;
        height: 53px;
        color: #000000;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        background-color: #debf89;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        line-height: 53px;
        letter-spacing: 0.26em;
    }
        .ip_popup_form .modal-listings-form input.wpcf7-submit:hover {
            color: #ffffff;
            background-color: #000000;
        }

        .ip_popup_form div.wpcf7-response-output {
            text-align: center;
        }


/*Upcoming Contents Page*/

.page-template-template-upcoming-opens .fp-details-wrapper {
    padding: 0;
    background: rgba(0,0,0,.7);
    max-width: 80%;
    display: block;
    margin: 0 auto;
}

.page-template-template-upcoming-opens .fp-detals-inside {
    padding: 25px 0;
    transition: all 0.4s ease-in-out;
}

.page-template-template-upcoming-opens .fp a:hover .fp-detals-inside {
    padding-bottom: 0;
}
.page-template-template-upcoming-opens .fp-price{
    position: relative;
    line-height: 1.5;
    width: 100%;
    background: transparent;
    transform: none;
    line-height: 2;
    -webkit-transition: all 1s ease-in-out;
    -o-transition:  all 1s ease-in-out;
    transition:  all 1s ease-in-out;
    height: auto;
}

.page-template-template-upcoming-opens .fp-address{
    transform: none;
    -webkit-transition: all 1s ease-in-out;
    -o-transition:  all 1s ease-in-out;
    transition:  all 1s ease-in-out;
}

.page-template-template-upcoming-opens .fp-open-house {
    font-size: 24px;
    letter-spacing: 1px;
    color: #000;
    font-family: 'PT Sans Narrow', Arial, Helvetica, Georgia, Sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    background: #debf89;
    padding: 10px 0;
}

.page-template-template-upcoming-opens .fp-price-content {
    position: relative;
    width: 100%;
}

.page-template-template-upcoming-opens .fp-ammenities{
    padding: 0;
    opacity: 1;
    padding-bottom: 25px;
}

.page-template-template-upcoming-opens .fp a:hover .fp-ammenities{
        opacity: 1;
        height: auto;
}



.page-template-template-upcoming-opens .fp-statuses-holder {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .1em;
    color: #191919;
    text-transform: uppercase;
    z-index: 1;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition:  all 0.4s ease-in-out;
    transition:  all 0.4s ease-in-out;
}
.page-template-template-upcoming-opens .fp-statuses-btn-holder {
    background: rgba(222, 191, 137, 0.6);
    padding: 5px;
    margin: 5px;
}

.page-template-template-upcoming-opens .fp a:hover .fp-statuses-btn-holder{
    opacity: 0;
}

.page-template-template-upcoming-opens .fp-statuses-btn{
    background: #debf89;
    padding: 5px 10px;
}

.page-template-template-upcoming-opens .ip-prop-s1-left{
    text-align: center;
    width: 100%;
}

.page-template-template-upcoming-opens .ip-title{
    text-align: center;
}


.page-template-template-upcoming-opens #content .ip-prop-s1-left p{
    max-width: 400px;
    margin: 1.5em auto;
}

.page-template-template-upcoming-opens .ip-prop-s1-left .accent-line.accent-red{
    height: 1px;
    width: 1000px;
    left: 100%;
    top: 67%;
    margin-left: 48px;
    margin-right: 0;
    right: unset;
}

.page-template-template-upcoming-opens .ip-prop-s1-left .accent-line-dot {
    left: -9px;
    right: unset;
}
/*Listing Portfolio Page*/

.page-template-template-listing-portfolio .fp-details-wrapper , 
.page-template-template-listing-off-market .fp-details-wrapper ,
.page-template-template-sold-gallery .fp-details-wrapper,
.page-template-template-pre-market .fp-details-wrapper,
.home .fp-details-wrapper {
    padding: 0;
    background: rgba(0,0,0,.7);
    max-width: 80%;
    display: block;
    margin: 0 auto;
}

.page-template-template-listing-portfolio .fp-detals-inside , 
.page-template-template-listing-off-market .fp-detals-inside ,
.page-template-template-sold-gallery .fp-detals-inside,
.page-template-template-pre-market .fp-detals-inside,
.home .fp-detals-inside{
    /*padding: 25px 0;*/
    padding: 15px 0;
    transition: all 0.4s ease-in-out;
}

.page-template-template-listing-portfolio .fp a:hover .fp-detals-inside , 
.page-template-template-listing-off-market .fp a:hover .fp-detals-inside ,
.page-template-template-sold-gallery .fp a:hover .fp-detals-inside,
.page-template-template-pre-market .fp a:hover .fp-detals-inside,
.home .fp a:hover .fp-detals-inside{
    padding-bottom: 0;
}
.page-template-template-listing-portfolio .fp-price, 
.page-template-template-listing-off-market .fp-price,
.page-template-template-sold-gallery .fp-price,
.page-template-template-pre-market .fp-price,
.home .fp-price{
    position: relative;
    line-height: 1.5;
    width: 100%;
    background: transparent;
    transform: none;
    line-height: 2;
    -webkit-transition: all 1s ease-in-out;
    -o-transition:  all 1s ease-in-out;
    transition:  all 1s ease-in-out;
    height: auto;
}

.page-template-template-listing-portfolio .fp-address, 
.page-template-template-listing-off-market .fp-address,
.page-template-template-sold-gallery .fp-address,
.page-template-template-pre-market .fp-address,
.home .fp-address{
    transform: none;
    -webkit-transition: all 1s ease-in-out;
    -o-transition:  all 1s ease-in-out;
    transition:  all 1s ease-in-out;
}

.page-template-template-listing-portfolio .fp-open-house , 
.page-template-template-listing-off-market .fp-open-house ,
.page-template-template-sold-gallery .fp-open-house,
.page-template-template-pre-market .fp-open-house,
.home .fp-open-house {
    font-size: 24px;
    letter-spacing: 1px;
    color: #000;
    font-family: 'PT Sans Narrow', Arial, Helvetica, Georgia, Sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    background: #debf89;
    padding: 10px 0;
}

.page-template-template-listing-portfolio .fp-price-content , 
.page-template-template-listing-off-market .fp-price-content ,
.page-template-template-sold-gallery .fp-price-content,
.page-template-template-pre-market .fp-price-content,
.home  .fp-price-content{
    position: relative;
    width: 100%;
}

.page-template-template-listing-portfolio .fp-ammenities, 
.page-template-template-listing-off-market .fp-ammenities,
.page-template-template-sold-gallery .fp-ammenities,
.page-template-template-pre-market .fp-ammenities,
.home .fp-ammenities{
    padding: 0;
    opacity: 1;
    /*padding-bottom: 25px;*/
    padding-bottom: 15px;
}

.page-template-template-listing-portfolio .fp a:hover .fp-ammenities, 
.page-template-template-listing-off-market .fp a:hover .fp-ammenities,
.page-template-template-sold-gallery .fp a:hover .fp-ammenities,
.page-template-template-pre-market .fp a:hover .fp-ammenities,
.home .fp a:hover .fp-ammenities{
        opacity: 1;
        height: auto;
}

.page-template-template-listing-portfolio .fp-details, 
.page-template-template-listing-off-market .fp-details,
.page-template-template-sold-gallery .fp-details,
.page-template-template-pre-market .fp-details,
.page-template-template-upcoming-opens .fp-details,
.home .fp-details{
    /*bottom: -135px;*/
    bottom: -125px;
}

.home .fp-details{
    bottom: -112px;
}

.page-template-template-listing-portfolio .fp-statuses-holder , 
.page-template-template-listing-off-market .fp-statuses-holder ,
.page-template-template-sold-gallery .fp-statuses-holder,
.page-template-template-pre-market .fp-statuses-holder,
.home .fp-statuses-holder {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .1em;
    color: #191919;
    text-transform: uppercase;
    z-index: 1;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition:  all 0.4s ease-in-out;
    transition:  all 0.4s ease-in-out;
}
.page-template-template-listing-portfolio .fp-statuses-btn-holder , 
.page-template-template-listing-off-market .fp-statuses-btn-holder ,
.page-template-template-sold-gallery .fp-statuses-btn-holder,
.page-template-template-pre-market .fp-statuses-btn-holder,
.home .fp-statuses-btn-holder {
    background: rgba(222, 191, 137, 0.6);
    padding: 5px;
    margin: 5px;
}

.page-template-template-listing-portfolio .fp a:hover .fp-statuses-btn-holder, 
.page-template-template-listing-off-market .fp a:hover .fp-statuses-btn-holder,
.page-template-template-sold-gallery .fp a:hover .fp-statuses-btn-holder,
.page-template-template-pre-market .fp a:hover .fp-statuses-btn-holder,
.home .fp a:hover .fp-statuses-btn-holder{
    opacity: 0;
}

.page-template-template-listing-portfolio .fp-statuses-btn, 
.page-template-template-listing-off-market .fp-statuses-btn,
.page-template-template-sold-gallery .fp-statuses-btn,
.page-template-template-pre-market .fp-statuses-btn,
.home .fp-statuses-btn{
    background: #debf89;
    padding: 5px 10px;
}
/*Sold Gallery Page*/


.page-template-template-sold-gallery .fp-statuses-holder {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .1em;
    color: #191919;
    text-transform: uppercase;
    z-index: 1;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition:  all 0.4s ease-in-out;
    transition:  all 0.4s ease-in-out;
}
.page-template-template-sold-gallery .fp-statuses-btn-holder {
    background: rgba(222, 191, 137, 0.6);
    padding: 5px;
    margin: 5px;
}

.page-template-template-sold-gallery .fp a:hover .fp-statuses-btn-holder{
    opacity: 0;
}

.page-template-template-sold-gallery .fp-statuses-btn{
    background: #debf89;
    padding: 5px 10px;
}


/*Neighborhoods Listings*/
.single-neighborhood .fp-address{
    transform: translateY(80%);
    line-height: 1.2;
}


.testi{
    vertical-align: text-top;
}

.full-test{
    display: none;
}


.big_thumbnails canvas,
.small_thumbnails canvas{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
}

#map {
    position: absolute !important;
    /*height: 100%;*/
    width: 100%;
    z-index: 9;
    top: 110px;
    bottom: 0;
}
#map .google-maps {
    position: absolute;
    width: 100%;
    height: 110%;  /*that will do the trick*/
    left: 0;
    top: 0;
}

div#map_contact {
    width: 100%;
    height: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
}

/*custom-home-valuation*/
.page-template-template-custom-home-valuation #inner-page-wrapper {
    margin-bottom: 0;
    overflow: hidden;
}
.page-template-template-custom-home-valuation footer.footer-wrapper {
    padding-top: 0;
}
.ip-chv {
    padding: 87px 75px 137px 0;
    margin-bottom: 120px;
    position: relative;
}
    .ip-chv:before {
        content: '';
        width: 632px;
        height: 334px;
        background: url(images/eca-logo-chv.png) center/cover no-repeat;
        position: absolute;
        top: 13px;
        right: -11px;
    }
    .ip-chv:after {
        content: '';
        position: absolute;
        right: 51.3%;
        left: -1000px;
        bottom: -120px;
        height: 120px;
        background: #debf89;
    }

    .single-aios-agents .ip-chv:after{
        display: none;
    }

    .ip-chv .section-parallax-a.section-parralax-flow-right {
        top: 0;
        bottom: 0;
        left: 101.3%;
        right: -1000px;
    }
    .ip-chv .accent-line.accent-red {
        left: 100%;
        width: 1000px;
        height: 1px;
        top: 70%;
        margin-left: 82px;
    }
    .ip-chv .ip-title-wrap {
        margin-bottom: 99px;   
    }
        #content .ip-chv .ip-title-wrap p {
            margin: 1.35em 0;
        }
    .ip-chv-form {

    }
        .ip-chv-form .aidefcf-subtitle {
            font-size: 19px;
            line-height: 1;
            letter-spacing: .05em;
            color: #303030;
            padding-bottom: 1px;
            min-height: 70px;
            margin-bottom: 36px;
        }
            .ip-chv-form .aidefcf-subtitle span {
                font: 400 24px/1 'Cormorant Garamond', serif;
                letter-spacing: .2em;
                color: #000;
                margin-bottom: 20px;
            }
        .ip-chv-form .aidefcf-left,
        .ip-chv-form .aidefcf-right {
            width: calc(50% - 17.5px);
        }
        .ip-chv-form .ai-default-cf7wrap input[type="text"],
        .ip-chv-form .ai-default-cf7wrap input[type="tel"],
        .ip-chv-form .ai-default-cf7wrap input[type="email"],
        .ip-chv-form .ai-default-cf7wrap select,
        .ip-chv-form .ai-default-cf7wrap textarea {
            height: 83px;
            padding: 0 30px !important;
            color: #000000;
            font-size: 14px;
            font-family: inherit;
            text-transform: uppercase;
            letter-spacing: 0.24em;
            border: none;
            background-color: #e5e5e5;
            margin: 3.5px 0;
        }
        .ip-chv-form .ai-default-cf7wrap textarea {
            height: 297px;
            padding-top: 32px!important;
            resize: none;
            display: block;
        }
        .ip-chv-form .aidefcf-cl2 span {
            width: calc(50% - 3.5px);
        }
        .aidefcf-cl3 span {
            width: calc(33.33333333% - 3.5px);
        }
        .ip-chv-form .wpcf7-form-control-wrap + .aidefcf-subtitle {
            min-height: initial;
            margin-bottom: 0;
            margin-top: 47px;
        }
            .ip-chv-form .wpcf7-form-control-wrap + .aidefcf-subtitle span {
                white-space: nowrap;
            }

        .ip-chv-form .wpcf7-form-control.wpcf7-radio {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            padding-right: 9%;
            margin-top: 11px;
        }
            .ip-chv-form .wpcf7-list-item {
                margin: 0;
                position: relative;
                font-size: 14px;
                letter-spacing: .24em;
                line-height: 1;
                text-transform: uppercase;
            }

                .ip-chv-form .wpcf7-list-item input {
                    display: none;
                }
                .ip-chv-form .wpcf7-list-item span {
                    position: relative;  
                    padding-left: 40px;              
                }
                    .ip-chv-form .wpcf7-list-item span:before {
                        content: '';
                        position: absolute;
                        width: 21px;
                        height: 21px;
                        border-radius: 50%;
                        background: #e5e5e5;
                        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3) inset; 
                        left: 0;
                        top: -1px;
                    }
                    .ip-chv-form .wpcf7-list-item input:checked ~ span:before {
                        background: #DEBF89;
                    }
        .aidefcf-cl1 {
            position: relative;
        }
        .ip-chv-form .ip-contactform-submit {
            width: 112px;
            height: 53px;
            position: absolute;
            bottom: 21px;
            right: 21px;
        }
            .ip-chv-form .ip-contactform-submit span.submit-title {
                width: 100%;
                display: inline-block;
                vertical-align: middle;
                color: #000000;
                font-size: 14px;
                font-weight: 700;
                text-align: center;
                text-transform: uppercase;
                position: absolute;
                line-height: 53px;
                letter-spacing: 0.26em;
                pointer-events: none;
            }
                .ip-chv-form .ip-contactform-submit:hover span.submit-title {
                    color: #ffffff;
                }
                .ip-chv-form .ip-contactform-submit span.submit-title:before,
                .ip-chv-form .ip-contactform-submit span.submit-title:after {
                    width: 11px;
                    height: 1px;
                    content: '';
                    display: inline-block;
                    vertical-align: middle;
                    background-color: #000000;
                }
                    .ip-chv-form .ip-contactform-submit span.submit-title:before {
                        margin-right: 15px;
                    }
                    .ip-chv-form .ip-contactform-submit span.submit-title:after {
                        margin-left: 15px;
                    }
                    .ip-chv-form .ip-contactform-submit:hover span.submit-title:before, .ip-contactform-submit:hover span.submit-title:after {
                        background-color: #ffffff;
                    }

            .ip-chv-form .ip-contactform-submit input.wpcf7-submit {
                width: 100%;
                height: 53px;
                display: block;
                padding: 0;
                margin: 0;
                font-size: 0;
                border: none;
                outline: none;
                background-color: #debf89 !important;
            }
            .ip-chv-form .ip-contactform-submit input.wpcf7-submit:hover {
                background-color: #444444 !important; 
            }

            .ip-chv-form .ip-contactform-submit span.submit-title, 
            .ip-chv-form .ip-contactform-submit span.submit-title:before,
            .ip-chv-form .ip-contactform-submit span.submit-title:after,
            .ip-chv-form .ip-contactform-submit input.wpcf7-submit {
                transition: all .3s;
            }

        .ip-chv-form div.wpcf7-response-output {
            margin: 20px 0 0;
            text-align: center;
        }
        .ip-chv-form div.wpcf7 .ajax-loader {
            position: absolute;
            bottom: -18px;
            right: 0;
        }

#ihf-main-container .mc-total-payment-subline {
    color: #666;
}
#ihf-main-container .nav-tabs {
    margin-left: 0;
}
#ihf-main-container .chosen-drop ul.chosen-results {
    padding-left: 0;
    margin: 0;
}
.submit-title {
    display: none;
}

span.wpcf7-not-valid-tip {
    line-height: 1.3;
    width: initial!important;
}

form.our-properties-form {
    display: flex;
    flex-wrap: wrap;
    font-size: 0;
    letter-spacing: 0;
    width: 100%;
}

input.min-price-class, input.max-price-class {
    width: 110px;
    height: 20px;
    font-size: 12px;
}


/* IHF SPACE AT THE BOTTOM */
img[src="//deviceid.trueleadid.com/vng.gif"] {
    display: none;
}


/*custom select dropdown*/
.ai-default-cf7wrap .custom-select {
    height: initial;
    margin-bottom: 0;
    margin: 0;
    border: none;
    line-height: 1;
    font-size: 0;
    position: relative;
    font-family: inherit;
    opacity: 1;
}
.ai-default-cf7wrap .custom-selected {
    line-height: 83px;
    height: 83px;
    padding: 0 30px !important;
    color: #000000;
    font-size: 14px;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    border: none;
    background-color: #e5e5e5;
    margin: 3.5px 0;
}
.custom-select-list {
    border: solid 1px #858585;
    background: rgba(255,255,255,.9);
    display: none;
    width: 100%;
    max-height: 500px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    z-index: 1;
    color: #000000;
    font-size: 14px;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 0.24em;

    max-height: 270px;
}


    .custom-select-list-option {
        font-size: 14px;
        color: #000;
        padding: 10px 15px;
        line-height: initial;
    }
    .custom-select-list-option:hover {
        background: #debf89;
        color: #000;
    }
.ip-prop-rs-field .custom-select {
    display: block;
    width: 100%;
    max-width: 100%;
    background: transparent url(images/properties/icon-arrow-down.png) 96% 55% no-repeat;
    border: none;
    border-bottom: 1px solid #696969;
    height: 47px;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    opacity: 1;
    line-height: 47px;
    font-size: 14px;
    letter-spacing: .24em;
    color: #fff;
    text-transform: uppercase;
}


/*Screening Room*/
.page-template-template-screening-room .aiosp-iframe-scaler{
    height: auto;
}


/*Single Agents*/
.single-aios-agents .fp-statuses-holder {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .1em;
    color: #191919;
    text-transform: uppercase;
    z-index: 1;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition:  all 0.4s ease-in-out;
    transition:  all 0.4s ease-in-out;
}
.single-aios-agents .fp-statuses-btn-holder {
    background: rgba(222, 191, 137, 0.6);
    padding: 5px;
    margin: 5px;
}

.single-aios-agents .fp-statuses-btn{
    background: #debf89;
    padding: 5px 10px;
}

.single-aios-agents .fp a:hover .fp-statuses-btn-holder{
    opacity: 0;
}

.single-aios-agents .fp-details{
    bottom: -155px;
}

.single-aios-agents .fp-details-wrapper{
    padding: 0;
    background: rgba(0,0,0,.7);
    max-width: 80%;
    display: block;
    margin: 0 auto;
}

.single-aios-agents .fp-detals-inside{
    /* padding: 25px 0; */
    padding: 15px 0;
    transition: all 0.4s ease-in-out;
}

.single-aios-agents .fp a:hover .fp-detals-inside{
    padding-bottom: 0;
}
.single-aios-agents  .fp-address{
    transform: none;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    font-size: 15px;
}

.single-aios-agents  .fp-price{
    position: relative;
    line-height: 1.5;
    width: 100%;
    background: transparent;
    transform: none;
    line-height: 2;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    height: auto;
}

.single-aios-agents .fp a:hover .fp-ammenities{
    opacity: 1;
    height: auto;
    padding: 0 0 15px;
}

.single-aios-agents .fp a:hover .fp-details {
    transform: translateY(50%);
}


/*.single-aios-agents{
    overflow-x: hidden;
}

.single-aios-agents .ip-ad-section.ip-ad-section-1{
    overflow: visible;
}
*/
.single-aios-agents .ip-ad-s1-left{
    max-width: 44%;
}

.single-aios-agents .ip-ad-contact-info a.btn-a{
    margin: 55px auto;
}

.single-aios-agents .breadcrumb-container{
    z-index: 1;
}

.single-aios-agents .ip-agent-details-wrap{
    overflow: hidden;
    padding-bottom: 7px;
    top: -78px;
    position: relative;
}

.single-aios-agents .ip-ad-s1-left{
    top: 78px;
    position: relative;
}

.single-aios-agents  .ip-ad-s1-right{
    padding: 0 0 121px 15px;
}

.single-aios-agents .ip-ad-s1-right .section-parallax-a.section-parralax-flow-right.section-parralax-white{
    top: 78px;
}

.single-aios-agents .ip-ad-contact-info{
    margin-top: 0;
}

/*Single Neighborhood*/
.single-neighborhood .fp-statuses-holder {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .1em;
    color: #191919;
    text-transform: uppercase;
    z-index: 1;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition:  all 0.4s ease-in-out;
    transition:  all 0.4s ease-in-out;
}
.single-neighborhood .fp-statuses-btn-holder {
    background: rgba(222, 191, 137, 0.6);
    padding: 5px;
    margin: 5px;
}

.single-neighborhood .fp-statuses-btn{
    background: #debf89;
    padding: 5px 10px;
}

.single-neighborhood .fp a:hover .fp-statuses-btn-holder{
    opacity: 0;
}

.single-neighborhood .fp-details{
    bottom: -155px;
}

.single-neighborhood .fp-details-wrapper{
    padding: 0;
    background: rgba(0,0,0,.7);
    max-width: 80%;
    display: block;
    margin: 0 auto;
}

.single-neighborhood .fp-detals-inside{
    /* padding: 25px 0; */
    padding: 15px 0;
    transition: all 0.4s ease-in-out;
}

.single-neighborhood .fp a:hover .fp-detals-inside{
    padding-bottom: 0;
}
.single-neighborhood  .fp-address{
    transform: none;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    font-size: 15px;
}

.single-neighborhood  .fp-price{
    position: relative;
    width: 100%;
    background: transparent;
    transform: none;
    line-height: 2;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    height: auto;
    font-size: 19px;
}

.single-neighborhood .fp a:hover .fp-ammenities{
    opacity: 1;
    height: auto;
    padding: 0 0 15px;
}

.single-neighborhood .fp a:hover .fp-details {
    transform: translateY(50%);
}

/*About Page*/
.page-template-template-about .fp-statuses-holder {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .1em;
    color: #191919;
    text-transform: uppercase;
    z-index: 1;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition:  all 0.4s ease-in-out;
    transition:  all 0.4s ease-in-out;
}
.page-template-template-about .fp-statuses-btn-holder {
    background: rgba(222, 191, 137, 0.6);
    padding: 5px;
    margin: 5px;
}

.page-template-template-about .fp-statuses-btn{
    background: #debf89;
    padding: 5px 10px;
}

.page-template-template-about .fp a:hover .fp-statuses-btn-holder{
    opacity: 0;
}

.page-template-template-about .fp-details{
    bottom: -155px;
}

.page-template-template-about .fp-details-wrapper{
    padding: 0;
    background: rgba(0,0,0,.7);
    max-width: 80%;
    display: block;
    margin: 0 auto;
}

.page-template-template-about .fp-detals-inside{
    /* padding: 25px 0; */
    padding: 15px 0;
    transition: all 0.4s ease-in-out;
}

.page-template-template-about .fp a:hover .fp-detals-inside{
    padding-bottom: 0;
}
.page-template-template-about  .fp-address{
    transform: none;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    font-size: 15px;
}

.page-template-template-about  .fp-price{
    position: relative;
    line-height: 1.5;
    width: 100%;
    background: transparent;
    transform: none;
    line-height: 2;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    height: auto;
}

.page-template-template-about .fp a:hover .fp-ammenities{
    opacity: 1;
    height: auto;
    padding: 0 0 15px;
}

.page-template-template-about .fp a:hover .fp-details {
    transform: translateY(50%);
}


.page-template-template-about .ip-about-sold-listing-list .fp-img canvas,
.page-template-template-about .ip-about-active-listing-list .fp-img canvas,
.page-template-template-about .ip-about-featured-listing-list .fp-img canvas{
    height: auto;
}
.single-aios-agents .fp-price {
    font-size: 25px;
}


/*About Page*/
.ip-about-s1-img{
    margin-top: 0;
}

.ip-about-s1-text{
    position: relative;
    top: 40px;
}

.ip-about-wrap {
    overflow: hidden;
    top: -40px;
    position: relative;
}

/*Pre Market Relayout*/
.page-template-template-pre-market .fp-details{
    bottom: -125px;
}
.page-template-template-pre-market .ip-pm-countdown {
    min-height: auto;
    font: 400 30px/30px 'Cormorant Garamond', serif;
    letter-spacing: .05em;
    color: #debf89;
    text-transform: uppercase;
    width: 63%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.page-template-template-pre-market .ip-pm-countdown .ClassyCountdown-wrapper > div{
    position: relative;
    width: 25%;
    height: 92px;
    padding: 10px;
}

.page-template-template-pre-market .ip-pm-countdown .ClassyCountdown-wrapper > div > span > div {
    font: 400 25px/30px 'Cormorant Garamond', serif;
    letter-spacing: .05em;
    color: #debf89;
    margin-top: 15px;
    margin-bottom: 0;
}

.page-template-template-pre-market .ip-pm-countdown .ClassyCountdown-wrapper > div > span > span {
    top: -9px;
    position: relative;
    font: 11px/1 "PT Sans Narrow", sans-serif!important;
    letter-spacing: .05em;
    color: #debf89;
    text-transform: capitalize;
}

.page-template-template-pre-market .ip-pm-countdown .ClassyCountdown-wrapper{
    width: 100%;
}


.page-template-template-pre-market .fp-btn.btn-a{
    width: auto;
}





/*Single AIOS Listings*/
.single-aios-listings  .ip-about-section.ip-about-section-4 .fp-statuses-holder {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .1em;
    color: #191919;
    text-transform: uppercase;
    z-index: 1;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition:  all 0.4s ease-in-out;
    transition:  all 0.4s ease-in-out;
}
.single-aios-listings  .ip-about-section.ip-about-section-4 .fp-statuses-btn-holder {
    background: rgba(222, 191, 137, 0.6);
    padding: 5px;
    margin: 5px;
}

.single-aios-listings  .ip-about-section.ip-about-section-4 .fp-statuses-btn{
    background: #debf89;
    padding: 5px 10px;
}

.single-aios-listings  .ip-about-section.ip-about-section-4 .fp a:hover .fp-statuses-btn-holder{
    opacity: 0;
}

.single-aios-listings  .ip-about-section.ip-about-section-4 .fp-details{
    bottom: -155px;
}

.single-aios-listings  .ip-about-section.ip-about-section-4 .fp-details-wrapper{
    padding: 0;
    background: rgba(0,0,0,.7);
    max-width: 80%;
    display: block;
    margin: 0 auto;
}

.single-aios-listings  .ip-about-section.ip-about-section-4 .fp-detals-inside{
    /* padding: 25px 0; */
    padding: 15px 0;
    transition: all 0.4s ease-in-out;
}

.single-aios-listings  .ip-about-section.ip-about-section-4 .fp a:hover .fp-detals-inside{
    padding-bottom: 0;
}
.single-aios-listings  .ip-about-section.ip-about-section-4  .fp-address{
    transform: none;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    font-size: 15px;
}

.single-aios-listings  .ip-about-section.ip-about-section-4  .fp-price{
    position: relative;
    line-height: 1.5;
    width: 100%;
    background: transparent;
    transform: none;
    line-height: 2;
    -webkit-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    height: auto;
}

.single-aios-listings  .ip-about-section.ip-about-section-4 .fp a:hover .fp-ammenities{
    opacity: 1;
    height: auto;
    padding: 0 0 15px;
}

.single-aios-listings  .ip-about-section.ip-about-section-4 .fp a:hover .fp-details {
    transform: translateY(50%);
    bottom: 50%;
}


/*single-neighborhood*/
.single-neighborhood .ip-comm-section.ip-comm-section-2{
    overflow: hidden;
}

.comm-details-about {
    padding-top: 50px;
}



.no-listing {
    font-size: 45px;
    line-height: 2;
    text-align: center;
}

.page-template-template-upcoming-opens .fp-details{
    bottom: -135px;
}



.single-aios-agents .agent-position {
    letter-spacing: 1px !important;
    line-height: 1.3;
    margin-top: 10px;
}



.page-id-133 #ui-id-1 {
    max-height: 205px;
    overflow-y: scroll;
    border: none;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: #fff;
}


.git-form .sufir-holder div.wpcf7-response-output{
    position: relative;
    width: calc(100% - 10px);
    left: unset;
    right: unset;
    margin: 6px auto;

}


.pum-overlay{
    background: rgba(0,0,0,0.6) !important;
}


.ip-agent-details-wrap .ip-about-section-3, .ip-about-section-4{
    padding: 30px 0;
}


@supports (-ms-ime-align: auto) {
  #get-in-touch {
        background-attachment: scroll;
  }

  #main-wrapper{
    overflow: visible;
  }
}


.ihf-grid-result-container .ihf-grid-result-address{
    white-space: nowrap;
width: 100%;
overflow: hidden;
text-overflow: ellipsis;
text-transform: uppercase;
display: block;
}

.ihf-grid-result-container .ihf-grid-result-address br {
    display: none;
}

.ihf-grid-result-container .ihf-map-icon{
    top: -7px;
}




/*rick-tyberg personal monogram logo*/
.single-aios-agents.postid-1677 .ip-ad-contact-info img {
    background-size: 100px !important;
}

.page-id-108 .ip-contact-wrapper .ai-default-cf7wrap textarea {
    padding-right: 140px !important;
}

.dre {
	color: #ffffff;
}
.foot-dre {
	margin: 15px;
	font-size: 25px;
}

/* MEDIA QUERIES ARE AUTOMATICALLY REMOVED FROM THIS FILE, they must be placed in style-media-queries.css 






/*Do no Sell Page*/

.wpcf7-form-control-wrap.donotsellPI .wpcf7-list-item-label {
    font-size: 15px;
}

.wpcf7-form-control-wrap.donotsellPI .wpcf7-list-item.first.last {
    margin: 0;
}
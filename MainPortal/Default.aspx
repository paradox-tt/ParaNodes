﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="MainPortal._default" %>

<%@ Register Src="~/PageParts/Head.ascx" TagPrefix="uc1" TagName="Head" %>
<%@ Register Src="~/PageParts/Menu.ascx" TagPrefix="uc1" TagName="Menu" %>
<%@ Register Src="~/PageParts/Footer.ascx" TagPrefix="uc1" TagName="Footer" %>




<!doctype html>
<html lang="en">
<head>
    <uc1:Head runat="server" ID="Head" />
</head>

<body>
    <div class="preloader">
        <img src="Assets/images/preloader.svg" alt="Pre-loader">
    </div>

    <!-- =======================
	header Start-->
    <header class="navbar-transparent navbar-dark">
        <!-- Logo Nav Start -->
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <!-- Logo -->
                <a class="navbar-brand" href="default.aspx">
                    <!-- SVG Logo Start -->
                    <svg class="navbar-brand-item" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMid" width="325.656" height="100" viewBox="0 0 325.656 100">
                        <g>
                            <path d="M320.187,75.278 C316.545,78.817 312.335,80.585 307.558,80.585 C302.721,80.585 298.497,78.830 294.885,75.322 C291.271,71.813 289.466,67.749 289.466,63.129 L289.466,55.058 C289.466,50.440 291.243,46.404 294.797,42.953 C298.351,39.503 302.605,37.778 307.558,37.778 C312.393,37.778 316.617,39.488 320.231,42.909 C323.843,46.330 325.650,50.381 325.650,55.058 L325.650,63.129 C325.650,67.690 323.828,71.740 320.187,75.278 ZM316.473,55.086 C316.473,52.763 315.583,50.671 313.807,48.813 C312.029,46.954 309.946,46.023 307.558,46.023 C305.111,46.023 303.013,46.954 301.265,48.813 C299.517,50.671 298.643,52.763 298.643,55.086 L298.643,63.103 C298.643,65.485 299.517,67.620 301.265,69.507 C303.013,71.396 305.111,72.339 307.558,72.339 C309.946,72.339 312.029,71.396 313.807,69.507 C315.583,67.620 316.473,65.485 316.473,63.103 L316.473,55.086 ZM285.184,76.023 C285.184,77.018 284.513,78.027 283.173,79.050 C281.832,80.072 280.551,80.585 279.328,80.585 C278.220,80.585 277.434,80.234 276.968,79.532 L267.529,65.058 L258.090,79.532 C257.565,80.234 256.749,80.585 255.642,80.585 C254.535,80.585 253.296,80.087 251.928,79.094 C250.558,78.100 249.874,77.076 249.874,76.023 C249.874,75.440 250.078,74.883 250.486,74.357 L261.323,58.743 L251.010,44.006 C250.602,43.480 250.398,42.953 250.398,42.427 C250.398,41.374 251.083,40.337 252.452,39.313 C253.821,38.290 255.147,37.778 256.429,37.778 C257.478,37.778 258.206,38.129 258.614,38.830 L267.529,52.865 L276.444,38.918 C276.909,38.159 277.667,37.778 278.716,37.778 C279.881,37.778 281.163,38.290 282.562,39.313 C283.960,40.337 284.659,41.374 284.659,42.427 C284.659,42.896 284.454,43.422 284.047,44.006 L273.647,58.830 L284.572,74.357 C284.979,74.883 285.184,75.440 285.184,76.023 ZM238.687,27.865 C237.230,27.865 235.978,27.383 234.929,26.418 C233.880,25.453 233.356,24.328 233.356,23.041 C233.356,21.696 233.880,20.556 234.929,19.620 C235.978,18.685 237.230,18.216 238.687,18.216 C240.143,18.216 241.397,18.685 242.445,19.620 C243.494,20.556 244.019,21.696 244.019,23.041 C244.019,24.328 243.494,25.453 242.445,26.418 C241.397,27.383 240.143,27.865 238.687,27.865 ZM224.617,79.883 L197.435,79.883 C196.387,79.883 195.585,79.560 195.032,78.910 C194.477,78.260 194.202,77.512 194.202,76.665 C194.202,75.659 194.726,74.416 195.775,72.935 L214.478,45.673 L197.872,45.673 C197.115,45.673 196.444,45.307 195.862,44.572 C195.279,43.837 194.988,42.963 194.988,41.946 C194.988,40.930 195.250,40.069 195.775,39.364 C196.299,38.658 196.998,38.304 197.872,38.304 L223.131,38.304 C224.005,38.304 224.748,38.573 225.360,39.109 C225.972,39.646 226.277,40.422 226.277,41.437 C226.277,42.680 225.810,43.954 224.879,45.256 L206.088,72.515 L224.617,72.515 C225.432,72.515 226.131,72.868 226.714,73.574 C227.296,74.280 227.588,75.169 227.588,76.241 C227.588,77.258 227.311,78.119 226.758,78.825 C226.204,79.531 225.491,79.883 224.617,79.883 ZM182.753,27.865 C181.295,27.865 180.043,27.383 178.994,26.418 C177.946,25.453 177.421,24.328 177.421,23.041 C177.421,21.696 177.946,20.556 178.994,19.620 C180.043,18.685 181.295,18.216 182.753,18.216 C184.208,18.216 185.462,18.685 186.511,19.620 C187.560,20.556 188.084,21.696 188.084,23.041 C188.084,24.328 187.560,25.453 186.511,26.418 C185.462,27.383 184.208,27.865 182.753,27.865 ZM158.544,78.918 C158.077,80.146 156.853,80.760 154.873,80.760 C152.891,80.760 151.639,80.175 151.115,79.006 L143.511,56.374 L135.994,78.743 C135.470,80.087 134.159,80.760 132.061,80.760 C130.139,80.760 128.915,80.087 128.391,78.743 L114.844,43.304 C114.610,42.602 114.494,42.106 114.494,41.813 C114.494,40.760 115.134,39.854 116.417,39.094 C117.698,38.334 119.009,37.953 120.350,37.953 C121.806,37.953 122.738,38.510 123.147,39.620 L132.848,66.901 L140.277,42.690 C140.684,41.345 141.763,40.673 143.511,40.673 C145.259,40.673 146.336,41.345 146.745,42.690 L154.086,67.076 L163.875,39.620 C164.225,38.510 165.127,37.953 166.584,37.953 C167.865,37.953 169.163,38.334 170.474,39.094 C171.785,39.854 172.440,40.790 172.440,41.901 C172.440,42.369 172.323,42.837 172.091,43.304 L158.544,78.918 ZM182.753,38.304 C184.092,38.304 185.200,38.582 186.074,39.137 C186.948,39.694 187.385,40.409 187.385,41.287 L187.385,76.813 C187.385,77.574 186.933,78.275 186.030,78.918 C185.126,79.562 184.034,79.883 182.753,79.883 C181.470,79.883 180.393,79.562 179.519,78.918 C178.645,78.275 178.208,77.574 178.208,76.813 L178.208,41.287 C178.208,40.409 178.630,39.694 179.475,39.137 C180.319,38.582 181.412,38.304 182.753,38.304 ZM238.687,38.304 C240.027,38.304 241.134,38.582 242.008,39.137 C242.882,39.694 243.319,40.409 243.319,41.287 L243.319,76.813 C243.319,77.574 242.867,78.275 241.965,78.918 C241.061,79.562 239.968,79.883 238.687,79.883 C237.405,79.883 236.327,79.562 235.453,78.918 C234.579,78.275 234.142,77.574 234.142,76.813 L234.142,41.287 C234.142,40.409 234.564,39.694 235.410,39.137 C236.254,38.582 237.346,38.304 238.687,38.304 Z" class="fill-white" />
                            <circle cx="50.047" cy="50" r="50.047" class="fill-white" />
                            <path d="M86.607,38.585 L55.868,69.317 C53.678,71.508 50.126,71.508 47.936,69.317 C45.745,67.127 45.745,63.577 47.936,61.387 L78.674,30.654 C80.865,28.464 84.416,28.464 86.607,30.654 C88.797,32.844 88.797,36.395 86.607,38.585 ZM26.806,69.317 C25.679,70.444 24.193,70.981 22.716,70.948 C22.636,70.953 22.560,70.972 22.478,70.972 L20.552,70.972 C18.108,70.972 16.128,68.992 16.128,66.548 L16.128,33.452 C16.128,31.008 18.108,29.028 20.552,29.028 L22.478,29.028 C24.922,29.028 26.902,31.008 26.902,33.452 L26.902,53.359 L49.612,30.654 C51.802,28.464 55.354,28.464 57.544,30.654 C59.735,32.844 59.735,36.395 57.544,38.585 L26.806,69.317 Z" class="fill-dark" />
                        </g>
                    </svg>
                    <!-- SVG Logo End -->
                </a>
                <!-- Menu opener button -->
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Main Menu Start -->
                <uc1:Menu runat="server" ID="Menu" />
                <!-- Main Menu End -->
            </div>
        </nav>
        <!-- Logo Nav End -->
    </header>
    <!-- =======================
	header End-->

    <!-- =======================
	Main Banner -->
    <section class="p-0 height-600 position-relative">
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-md-2 bg-grad height-600 d-none d-md-block">
                    <div class="row h-100">
                        <div class="col-10 pb-5 mx-auto d-flex">
                            <div class="align-self-end all-text-white rotate-270 pb-5 mb-5">
                                <a class="btn btn-white btn-round zoom-on-hover mx-2 align-middle d-inline-block" data-fancybox="" href="https://youtu.be/n_Cn8eFo7u8"><i class="fa fa-play"></i></a>
                                <div class="align-middle d-inline-block">
                                    <h4 class="mb-0">Who we are..</h4>
                                    <p class="mb-0">In 02:11 min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 height-600 bg-overlay-dark-2" style="background: url(Assets/images/bg/12.jpg) no-repeat center center; background-size: cover;">
                    <div class="row h-100 m-0 justify-content-center align-items-center">
                        <div class="col-8 offset-md-1 mr-auto all-text-white">
                            <h1 class="display-4 display-md-2 font-weight-700 font-weight-700 alt-font font-italic">ParaNodes</h1>
                            <h4 class="display-6 display-md-5 font-weight-700 text-white">Secure and Reliable Validators Nodes</h4>
                            <a href="#" class="btn btn-outline-white btn-lg mt-3">Who are we?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =======================
	Main banner -->

    <!-- =======================
	about  -->
    <section class="">
        <div class="container">
            <div class="row">
                <div class="col-md-12 align-self-center mb-md-0 mb-5">
                    <h2 class="h1">Polkadot and Kusama Validators</h2>
                    <h6 class="mb-4">
                        <asp:Literal ID="WhoWeAre" runat="server" />
                    </h6>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="h-100 w-100 p-5" style="background: url(Assets/images/service/dot-ksm.png) center center; background-size: cover;"><span class="p-5"></span></div>
                </div>
                <div class="col-md-6">
                    <div class="bg-grad h-100 w-100 d-table p-5 all-text-white">
                        <h2 class="font-weight-700 m-0 d-table-cell align-middle"><span class="d-block h4">A simple vision–</span> to ensure secure and reliable operations of our validator nodes.</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =======================
	about  -->


    <!-- =======================
	service  -->
    <section class="pt-0">
        <div class="container">
            <div class="row">
                <div class="col-md-12 align-self-center mb-md-0 mb-5">
                    <h2 class="h1">Why nominate us?</h2>
                    <h6 class="mb-4">
                        <asp:Literal ID="Literal1" runat="server" />
                    </h6>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-6 col-md-4">
                    <div class="feature-box h-100 icon-grad">
                        <div class="feature-box-icon"><i class="ti-eye"></i></div>
                        <h3 class="feature-box-title">Focus</h3>
                        <p class="feature-box-desc">We operate within the Polkadot ecosystem exclusively and dedicate our time to learning how to best operate their nodes.  We keep abreast on all major events within the ecosystem and respond quickly when called upon. </p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="feature-box h-100 icon-grad">
                        <div class="feature-box-icon"><i class="ti-bolt"></i></div>
                        <h3 class="feature-box-title">Dedicated Servers</h3>
                        <p class="feature-box-desc">Our servers are Dedicated (not virtual) and are configured well above Polkadot's reference system.  We do not compromise on performance.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="feature-box h-100 icon-grad">
                        <div class="feature-box-icon"><i class="ti-settings"></i></div>
                        <h3 class="feature-box-title">Rendundancy</h3>
                        <p class="feature-box-desc">Secondary and Tertiary nodes are available in the United States and Caribbean.  Decentralization as it was meant to be!</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="feature-box h-100 icon-grad">
                        <div class="feature-box-icon"><i class="ti-check-box"></i></div>
                        <h3 class="feature-box-title">Identity checked!</h3>
                        <p class="feature-box-desc">ParaNodes was founded by one of the few W3F verified known-good identity holders, Paradox.  He is a Polakdot Ambassador and Community Moderator on Polkadot's offical discord.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="feature-box h-100 icon-grad">
                        <div class="feature-box-icon"><i class="ti-thumb-up"></i></div>
                        <h3 class="feature-box-title">Recognized Excellence</h3>
                        <p class="feature-box-desc">ParaNode's founder avidly assists other validators to ensure optimal operations of their servers.  This effort is recognized by the Council by way of several Treasury Tips.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="feature-box h-100 icon-grad">
                        <div class="feature-box-icon"><i class="ti-money"></i><i class="ti-money"></i><i class="ti-money"></i></div>
                        <h3 class="feature-box-title">Bonus Payouts</h3>
                        <p class="feature-box-desc">We have committed to return 5% of our validator earnings to loyal nominators based on a fair earning leaderboard approach.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =======================
	service  -->

    <!-- =======================
	about  -->
    <section class="py-0">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-md-6 h-md-50-vh border-radius-3 border-radius-right-0" style="background: url(Assets/images/bg/06.jpg) no-repeat; background-size: cover;">
                </div>
                <div class="col-md-6 p-md-5 p-4 bg-dark all-text-white border-radius-3 border-radius-left-0">
                    <h4 class="mb-4">Want to nominate us?</h4>
                    <h6>Polkadot validators @ 3% Fixed Commission</h6>
                    <ol>
                        <li>ParaNodes.io/01 | 5,000 DOT Self Stake 
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;ADDRESS:xx
                        </li>
                        <li>ParaNodes.io/02 | 1 DOT Self Stake 
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;ADDRESS:xx
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<i>Self Stake to be increased.</i>
                        </li>
                    </ol>
                    <br /><br />
                    <h6>Kusama validators @ 10% Commission trending to 5%</h6>
                    <ol>
                        <li>ParaNodes.io/01 | 50 KSM Self Stake 
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;ADDRESS:xx
                        </li>
   
                        <li>ParaNodes.io/02 | 50 KSM Self Stake 
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;ADDRESS:xx
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
 <br /><br /><br /><br /><br />
    <!-- =======================
	footer  -->
    <uc1:Footer runat="server" ID="Footer" />
    <!-- =======================
	footer  -->

    <div><a href="#" class="back-top btn btn-grad"><i class="ti-angle-up"></i></a></div>

    <!--Global JS-->
    <script src="Assets/vendor/jquery/jquery.min.js"></script>
    <script src="Assets/vendor/popper.js/umd/popper.min.js"></script>
    <script src="Assets/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="Assets/vendor/jquery-easing/jquery.easing.min.js"></script>

    <!--Vendors-->
    <script src="Assets/vendor/fancybox/js/jquery.fancybox.min.js"></script>
    <script src="Assets/vendor/owlcarousel/js/owl.carousel.min.js"></script>

    <!--Template Functions-->
    <script src="Assets/js/functions.js"></script>

</body>
</html>

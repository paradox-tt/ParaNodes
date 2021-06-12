<%@ Page Title="" Language="C#" MasterPageFile="~/MainLayout.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="MainPortal.Default2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
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
                    <h4 class="mb-4">Interested in nominating us?</h4>
                    <div class="container">
                        <div class="row">
                            <h6>Polkadot validators at <span class="text-primary">3.00%</span> fixed commission.</h6>
                        </div>
                        <div class="row">
                            <div class="mr-1">
                                Name:
                            </div>
                            <div class="mr-2 text-primary">
                                ParaNodes.io/01 
                            </div>
                            <div class="mr-1">
                                Self Stake:
                            </div>
                            <div class="md-1 text-primary">
                                5,000 DOT
                            </div>
                        </div>
                        <div class="row">
                            <div class="mr-1">Address:</div>
                            <div class="text-primary">
                                14hM4oLJCK6wtS7gNfwTDhthRjy5QJ1t3NAcoPjEepo9AH67
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="mr-1">
                                Name:
                            </div>
                            <div class="mr-2 text-primary">
                                ParaNodes.io/02 
                            </div>
                            <div class="mr-1">
                                Self Stake:
                            </div>
                            <div class="md-1 text-primary">
                                1 DOT
                            </div>
                        </div>
                        <div class="row">
                            <div class="mr-1">Address:</div>
                            <div class="text-primary">
                                13wroNHV6aJEkUFJEx4NYv7kv5vgq4HypLAPSz347VVQbYj3
                            </div>
                        </div>
                        <div class="row">
                            <div class="mr-1">Notes:</div>
                            <div>
                                This server is still waiting nominations before it can enter the active set.
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <div class="container">
                        <div class="row">
                            <h6>Kusama validators at <span class="text-primary">10.00%</span> commission trending to <span class="text-primary">5.00%</span>.</h6>
                        </div>
                        <div class="row">
                            <div class="mr-1">
                                Name:
                            </div>
                            <div class="mr-2 text-primary">
                                ParaNodes.io/01 
                            </div>
                            <div class="mr-1">
                                Self Stake:
                            </div>
                            <div class="md-1 text-primary">
                                50 KSM
                            </div>
                        </div>
                        <div class="row">
                            <div class="mr-1">Address:</div>
                            <div class="text-primary">
                                H3DL157HL7DkvV2kXocanmKaGXNyQphUDVW33Fnfk8KNhsv
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="mr-1">
                                Name:
                            </div>
                            <div class="mr-2 text-primary">
                                ParaNodes.io/02 
                            </div>
                            <div class="mr-1">
                                Self Stake:
                            </div>
                            <div class="md-1 text-primary">
                                50 KSM
                            </div>
                        </div>
                        <div class="row">
                            <div class="mr-1">Address:</div>
                            <div class="text-primary">
                                HtYny8Eker9VBEKQrtBd6Y5PTkaHQFSvyMFy2bkd66wGBan
                            </div>
                        </div>
                    </div>
                </div>
    </section>

</asp:Content>

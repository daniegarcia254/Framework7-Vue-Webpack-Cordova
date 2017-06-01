<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<!-- Left Panel -->
		<f7-panel left reveal layout="dark">
			<f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar v-if="$theme.ios" title="Left Panel" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-navbar v-if="$theme.material" title="Left Panel" sliding></f7-navbar>
						<f7-block inner>
							<p>Left panel content goes here</p>
						</f7-block>
						<f7-block-title>Load page in panel</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About"></f7-list-item>
							<f7-list-item link="/form/" title="Form"></f7-list-item>
						</f7-list>
						<f7-block-title>Load page in main view</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>

		<!-- Main Views -->
		<f7-views>
			<f7-view main>
				<f7-pages>
					<f7-page id="main-view">
						<f7-block id="block-fb-email-login">
							<f7-grid center>
								<f7-col>
									<f7-button big fill id="fb-login-btn" @click="facebookLogin">
										<i class="f7-icons" data-position="left">social_facebook_fill</i>
										<span>Log in with Facebook</span>
									</f7-button>
								</f7-col>
							</f7-grid>
							<f7-grid center>
								<f7-col>
									<span>o</span>
								</f7-col>
							</f7-grid>
							<f7-grid center>
								<f7-col>
									<f7-button big fill id="email-login-btn" @click="$f7.mainView.router.load({url: '/login/'})">
										<span>Log in with your email</span>
									</f7-button>
								</f7-col>
							</f7-grid>
						</f7-block>
						<f7-block id="block-register-login">
							<f7-grid center>
								<f7-col>
									<span>!Register now!</span><br>
									<span>It's free and you will have<br>
										access to all the features</span>
								</f7-col>
							</f7-grid>
							<f7-grid center>
								<f7-col>
									<f7-button big id="register-login-btn" @click="$f7.mainView.router.load({url: '/register/'})">
										<span>Don't have an account? Register!</span>
									</f7-button>
								</f7-col>
							</f7-grid>
						</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>
	</div>
</template>

<script>



export default {
	data: function () {
		return {
			username: ''
		}
	},
	methods: {
		facebookLogin(){
			console.log("FACEBOOK LOGIN");	
		},
		emailLogin(){
			console.log("EMAIL LOGIN");	
		},
		register(){
			console.log("REGISTER");	
		}
	}
}
</script>

<style lang="sass" scoped>
	#main-view {
		background-color: #f54764;
		font-family: 'nunito-medium';
		padding: 0% 10%;
		.row {
			margin-bottom: 10px;
			color: white;
			text-align: center;
		}
	}
	#block-fb-email-login, #block-register-login {
		position: relative; 
		top: 50%;
		transform: translateY(-150%);
	}
	#block-fb-email-login {
		margin-bottom: 80px;
	}

	#fb-login-btn {
		background-color: #3b5998;
		i { vertical-align: middle; }
		span {
			margin: 0px 10px;
			font-size: 15px;
		}
	}
	#email-login-btn {
		background-color: white;
		color: #f54764;
	}
	#login-btn {
		margin: 0px 50px;
	}
	#email-login-btn span, #login-btn span{
		margin: 0px 20px;
		font-size: 15px;
	}
	#block-register-login .row:nth-child(1) span:nth-child(1){
		font-size: 20px;
	}
	#register-login-btn {
		border-width: 2px;
		border-color: white;
		color: white;
	}
</style>

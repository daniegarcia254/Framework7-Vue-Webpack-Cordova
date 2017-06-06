<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

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
										<span>{{ $t("main.login.fb") }}</span>
									</f7-button>
								</f7-col>
							</f7-grid>
							<f7-grid center>
								<f7-col>
									<span>{{ $t("main.or") }}</span>
								</f7-col>
							</f7-grid>
							<f7-grid center>
								<f7-col>
									<f7-button big fill id="email-login-btn" @click="$f7.mainView.router.load({url: '/login/'})">
										<span>{{ $t("main.login.email") }}</span>
									</f7-button>
								</f7-col>
							</f7-grid>
						</f7-block>
						<f7-block id="block-register-login">
							<f7-grid center>
								<f7-col>
									<span>{{ $t("main.register.title") }}</span><br>
									<span v-html="$t('main.register.message')"></span>
								</f7-col>
							</f7-grid>
							<f7-grid center>
								<f7-col>
									<f7-button big id="register-login-btn" @click="$f7.mainView.router.load({url: '/register/'})">
										<span>{{ $t("main.register.btn") }}</span>
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

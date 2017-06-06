<template>
	<f7-page class="login-register-page">
		<!--- Nav bar -->
		<f7-navbar>
			<f7-nav-left>
				<f7-link back icon-only icon-size="30" icon-f7="arrow_left"></f7-link>
			</f7-nav-left>
		</f7-navbar>

		<!-- Login form -->
		<f7-grid center>
			<f7-col width="100" tablet-width="50">
		<f7-list form>
			<f7-list-item>
				<f7-input type="text" v-bind:placeholder="$t('register.placeholders.name')" autofocus required></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-input type="text" v-bind:placeholder="$t('register.placeholders.email')" required></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-input type="password" v-bind:placeholder="$t('register.placeholders.password') "required></f7-input>
			</f7-list-item>
			<f7-label>{{ $t("register.password.conditions") }}</f7-label>
		</f7-list>
			</f7-col>
		</f7-grid>

		<!-- Terms and conditions -->	
		<f7-block id="terms-and-conditions">
			<f7-grid center>
				<f7-col>
					<span>{{ $t("register.terms_and_privacy.message") }}<br>
						<f7-link>{{ $t("register.terms_and_privacy.terms") }}</f7-link>
						{{ $t("register.terms_and_privacy.conj") }}
						<f7-link>{{ $t("register.terms_and_privacy.privacy") }}</f7-link>
					</span>
				</f7-col>
			</f7-grid>
		</f7-block>

		<!-- Login button -->
		<f7-block>
			<f7-grid center>
				<f7-col>
					<f7-button big fill id="register-btn">
						<span>{{ $t("register.btn") }}</span>
					</f7-button>
				</f7-col>
			</f7-grid>		
		</f7-block>
	</f7-page>
</template>

<script>
export default {}
</script>

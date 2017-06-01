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
				<f7-input type="text" autofocus required placeholder="Name and Surname"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-input type="text" autofocus required placeholder="Email"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-input type="password" required placeholder="Password"></f7-input>
			</f7-list-item>
			<f7-label>(Password should be at least 8 characters length)</f7-label>
		</f7-list>
			</f7-col>
		</f7-grid>

		<!-- Terms and conditions -->	
		<f7-block id="terms-and-conditions">
			<f7-grid center>
				<f7-col>
					<span>When Sign Up or Log in, you accept our<br>
						<f7-link>Terms and Conditions</f7-link> and 
						our <f7-link>Privacy Policy</f7-link></span>
				</f7-col>
			</f7-grid>
		</f7-block>

		<!-- Login button -->
		<f7-block>
			<f7-grid center>
				<f7-col>
					<f7-button big fill id="register-btn">
						<span>Sign Up</span>
					</f7-button>
				</f7-col>
			</f7-grid>		
		</f7-block>
	</f7-page>
</template>

<script>
export default {}
</script>

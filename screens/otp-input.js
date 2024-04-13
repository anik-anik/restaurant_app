import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

const OtpInputScreen = () => {
	const [otp, setOtp] = useState('');
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (otp.length == 4) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [otp]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Enter the OTP</Text>

			<OTPTextView
				handleTextChange={setOtp}
				keyboardType='numeric'
				tintColor='#FF0000'
			/>

			<Text style={styles.resendText}>Resend OTP in 60s</Text>

			<Pressable
				style={[
					styles.button,
					{ backgroundColor: disabled ? '#DDDDDD' : '#FF0000' },
				]}
				onPress={() => {
					setDisabled(true);
				}}
			>
				<Text style={styles.btnText} disabled={disabled}>
					Verify OTP
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 16,
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	resendText: {
		fontSize: 16,
		marginTop: 32,
		marginLeft: 'auto',
	},
	button: {
		borderRadius: 16,
		paddingVertical: 16,
		paddingHorizontal: 24,
		marginTop: 64,
		marginLeft: 'auto',
		// backgroundColor: '#FF0000',
	},
	btnText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default OtpInputScreen;

import * as React from 'react'
import * as Styled from './styles'
import * as Yup from 'yup'
import { Button, TextField } from '@material-ui/core'
import { Formik, FormikHelpers } from 'formik'

interface CTAValue {
	email: string
}

const formSchema = Yup.object().shape({
	email: Yup.string().email('Please enter a valid email.').required('Email is required.')
})

const CallToActionForm: React.FC = () => {
	const onSubmitCTA = React.useCallback(
		async ({ email }: CTAValue, actions: FormikHelpers<CTAValue>) => {
			try {
				console.log(`Email: ${email} submitted! Now time to do something with it...`)
				actions.setStatus({ errors: [], success: true })
			} catch (error) {
				actions.setStatus({ errors: [error] })
			} finally {
				actions.setSubmitting(false)
			}
		},
		[]
	)

	return (
		<Formik<CTAValue>
			initialValues={{ email: '' }}
			initialStatus={{ errors: [], success: false }}
			onSubmit={onSubmitCTA}
			validationSchema={formSchema}>
			{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, isValid, setStatus, status, touched }) => (
				<Styled.CallToActionForm onSubmit={handleSubmit}>
					<Styled.CallToActionInput>
						<TextField
							id="CTA"
							error={touched && errors?.email && !status.success ? true : false}
							helperText={
								touched && status.errors.length <= 0 && !status.success && errors?.email ? errors.email : undefined
							}
							label="Email"
							name="email"
							type="email"
							onChange={(e) => {
								setStatus({ errors: [], success: false })
								handleChange(e)
							}}
							onBlur={handleBlur}
							variant="outlined"
							required
						/>
						<Button
							disabled={!isValid || isSubmitting}
							type="submit"
							variant="contained"
							color="primary">
							Yummy Updates
						</Button>
						{status.errors.length > 0 &&
							status.errors.map((error: { message: string }, i: number) => (
								<Styled.CallToActionError key={`cta-error-${i}`}>{error.message}</Styled.CallToActionError>
							))}
						{status.errors.length <= 0 && status.success && (
							<Styled.CallToActionSuccess>
								Congratulations you&apos;re now on the waiting list!
							</Styled.CallToActionSuccess>
						)}
					</Styled.CallToActionInput>
				</Styled.CallToActionForm>
			)}
		</Formik>
	)
}

export default CallToActionForm

export default {
  submitForm: async () => {

    if (!Full_Name.isValid) {
      showAlert('Please fill all required fields', 'error');
      return;
    }

    try {
      await Create_Lead.run();

      resetWidget("Form1", true);
      showAlert('Successfully Created', 'success');

    } catch (e) {
      showAlert('Something is wrong with your data', 'error');
    }
  }
}
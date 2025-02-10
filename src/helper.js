import toast from "react-hot-toast/headless";
import { companyDetails } from "./constant";

/**
 * Sends an order confirmation email to the user.
 *
 * @param {Object} params
 * @param {Object} params.user - The user object containing at least fullName and email.
 * @param {Object} params.address - The selected address object.
 * @param {Array} params.products - Array of product objects in the order.
 * @param {String} params.orderId - The unique order identifier.
 * @param {Number} params.totalAmount - The total amount for the order.
 */
export const sendOrderEmail = async ({
  user,
  address,
  products,
  orderId,
  totalAmount,
}) => {
  // Construct the email body with order details.
  // ${user.fullName}
  let emailBody = `Hello Gadgenix Store,\n\n`;
  //   emailBody += `Thank you for your order!\n\n`;
  emailBody += `Order ID: ${orderId}\n\n`;
  emailBody += `Mobile Number:\n`;
  emailBody += `${user.mobile}\n`;
  emailBody += `Shipping Address:\n`;
  emailBody += `${address.name}\n`;
  emailBody += `${address.street}\n`;
  emailBody += `${address.city}, ${address.state}, ${address.zip}\n`;
  emailBody += `${address.country}\n\n`;
  emailBody += `${address.notes ? address.notes : "not notes"}\n\n`;
  emailBody += `Products:\n`;

  products.forEach((product) => {
    emailBody += `• ${product.name} (Quantity: ${product.quantity}) - ₹${product.price}\n`;
  });

  //   emailBody += `\nTotal Amount: ₹${totalAmount}\n\n`;
  //   emailBody += `Thank you for shopping with us!\n`;
  //   emailBody += `Best regards,\nManya AI Team`;
  emailBody += `\nTotal Amount: ₹${totalAmount}\n\n`;
  emailBody += `New Order from ${user.fullName}\n`;
  //   emailBody += `Best regards,\nManya AI Team`;

  // Prepare the payload for the email API.
  const payload = {
    to: companyDetails.email, // This should be the user's email.
    name: "Gadgenix Store",
    subject: "Order Confirmation - Gadgenix Store",
    body: emailBody,
  };

  try {
    // Send the POST request to the email API.
    const response = await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data.success) {
      toast.success("Email sent successfully");
    } else {
      toast.error("Failed to send email");
    }
  } catch (error) {
    toast.error("Error sending email: " + error.message);
  }
};

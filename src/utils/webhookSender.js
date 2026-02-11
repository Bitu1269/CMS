const axios = require("axios");

exports.sendArtifactWebhook = async (artifact) => {
  try {
    await axios.post(
      "https://webhook.site/0c980ed6-8efe-4433-9381-47fc6b35ae73",
      {
        id: artifact._id,
        title: artifact.title,
        createdAt: artifact.createdAt,
      },
    );

    console.log("✅ Webhook sent successfully");
  } catch (err) {
    console.log("❌ Webhook failed:", err.message);
  }
};

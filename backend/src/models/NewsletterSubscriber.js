import mongoose from "mongoose";

const newsletterSubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    subscriptionCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    lastSubscribedAt: {
      type: Date,
      default: null,
    },
    lastPricingEmailSentAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const NewsletterSubscriber = mongoose.model(
  "NewsletterSubscriber",
  newsletterSubscriberSchema,
);

export default NewsletterSubscriber;

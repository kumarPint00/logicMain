import mongoose, { Schema } from "mongoose";
import { type } from "os";

const CarSchema = new Schema({
  name: { type: String, required: false },
  brand: { type: String, required: false },
  model: { type: String, required: false },
  interiorColor: { type: String, required: false },
  exteriorColor: { type: String, required: false },
  year: { type: String, required: false },
  category: { type: String, required: false },
  location: { type: String, required: false },
  vehicleType: { type: String, required: false },
  featuredCar: { type: Boolean, default: false },
  status: { type: String, required: false },
  services: [{ type: String }],
  insurranceDetails: {
    strandardInsurrance: {
      sIprice: { type: String },
    },
    fullInsurrance: {
      fIprice: { type: String },
    },
  },
  description: { type: String, required: false },
  packageDetails: { type: Schema.Types.ObjectId, ref: 'PackageDetail' },
  carFeatures: { type: Schema.Types.ObjectId, ref: 'CarFeature' },
  provider: { type: Schema.Types.ObjectId, ref: "CarProvider", required: false },
  carImages: { type: Schema.Types.ObjectId, ref: 'CarImage' },
}, { timestamps: true });
// PackageDetail Schema
const PackageDetailSchema = new Schema({
  securityDeposit: { type: String, required: false },
  ExcessClaimAmount: { type: String },
  paymentMethods: {
    creditCard: { type: String },
  },
  dailypackage: {
    dprice: { type: String },
    dnumOFFreeKMs: { type: String },
    dpriceAfterFreeKMs: { type: String },
    dfreeCancellation: { type: Boolean },
    dcancellationCharge: { type: String },
    ddeliveryCharges: { type: String },
    dminimumDays: { type: String }
  },
  weeklypackage: {
    wprice: { type: String },
    wnumOFFreeKMs: { type: String },
    wpriceAfterFreeKMs: { type: String },
    wfreeCancellation: { type: Boolean },
    wcancellationCharge: { type: String },
    wdeliveryCharges: { type: String },
  },
  monthlypackage: {
    oneMonthPrice: {
      m1price: { type: String },
      m1numOFFreeKMs: { type: String },
      m1priceAfterFreeKMs: { type: String },
      m1freeCancellation: { type: Boolean },
      m1cancellationCharge: { type: String },
      m1deliveryCharges: { type: String },
    },
    threeMonthPrice: {
      m3price: { type: String },
      m3numOFFreeKMs: { type: String },
      m3priceAfterFreeKMs: { type: String },
      m3freeCancellation: { type: Boolean },
      m3cancellationCharge: { type: String },
      m3deliveryCharges: { type: String },
    },
    sixMonthPrice: {
      m6price: { type: String },
      m6numOFFreeKMs: { type: String },
      m6priceAfterFreeKMs: { type: String },
      m6freeCancellation: { type: Boolean },
      m6deliveryCharges: { type: String },
    },
    nineMonthPrice: {
      m9price: { type: String },
      m9numOFFreeKMs: { type: String },
      m9priceAfterFreeKMs: { type: String },
      m9cancellationCharge: { type: String },
      m9deliveryCharges: { type: String },
    },
  }
});



// CarFeature Schema
const CarFeatureSchema = new Schema({
  transmission: { type: String, required: false },
  cruiseControl: { type: Boolean, default: false },
  engineCapacity: { type: String, required: false },
  luggageBootCapacity: { type: String, required: false },
  engineSize: { type: String },
  bluetooth: { type: String },
  aux: { type: String },
  seater: { type: String },
  navigation: { type: String },
  parkingSense: { type: String },
  appleCarPlay: { type: Boolean, default: false },
  isoFix: { type: Boolean, default: false },
  sunRoof: { type: Boolean, default: false },
  pushButton: { type: Boolean, default: false },
  lcd: { type: Boolean, default: false },
  rearCamera: { type: Boolean, default: false },
});

// CarImage Schema
const CarImageSchema = new Schema({
  imageUrl: { type: String, required: false },
  imageType: { type: String, required: false },
});


// CarSchema.index({ brand: 1, model: 1, year: 1  });

const Car = mongoose.model("Car", CarSchema);
const CarImages = mongoose.model('CarImage', CarImageSchema);
const PackageDetail = mongoose.model('PackageDetail', PackageDetailSchema);
const CarFeature = mongoose.model('CarFeature', CarFeatureSchema);



export { Car, CarImages, PackageDetail, CarFeature };

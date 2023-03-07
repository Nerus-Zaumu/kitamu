-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'ADMIN', 'STORE');

-- CreateEnum
CREATE TYPE "SubscriptionPeriod" AS ENUM ('MONTHLY', 'QUARTERLY', 'HALFYEARLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "SubscriptionPrice" AS ENUM ('1000', '2500', '4000', '6000');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('UNORDERED', 'PENDING', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('PAYPAL', 'CREDIT_CARD', 'MOBILE_PAYMENT');

-- CreateEnum
CREATE TYPE "RatingType" AS ENUM ('BAD', 'MEDIOCRE', 'NORMAL', 'GOOD', 'EXCELLENT');

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "fullName" TEXT,
    "image" BYTEA,
    "age" INTEGER,
    "accountId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" BYTEA NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "type" "Role" NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnail" BYTEA NOT NULL,
    "description" TEXT NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "status" "OrderStatus" NOT NULL DEFAULT 'UNORDERED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "type" "PaymentType" NOT NULL DEFAULT 'PAYPAL',
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "id" TEXT NOT NULL,
    "period" "SubscriptionPeriod" NOT NULL DEFAULT 'MONTHLY',
    "amount" "SubscriptionPrice" NOT NULL DEFAULT '1000',
    "storeId" TEXT NOT NULL,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" TEXT NOT NULL,
    "rating" "RatingType" NOT NULL,
    "storeId" TEXT NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_customerTorating" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_mealToorder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_fullName_key" ON "customer"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "customer_accountId_key" ON "customer"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "customer_orderId_key" ON "customer"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "store_logo_key" ON "store"("logo");

-- CreateIndex
CREATE UNIQUE INDEX "store_accountId_key" ON "store"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "store_orderId_key" ON "store"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "profile_userId_key" ON "profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "profile_storeId_key" ON "profile"("storeId");

-- CreateIndex
CREATE UNIQUE INDEX "meal_thumbnail_key" ON "meal"("thumbnail");

-- CreateIndex
CREATE UNIQUE INDEX "payment_orderId_key" ON "payment"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_storeId_key" ON "subscription"("storeId");

-- CreateIndex
CREATE UNIQUE INDEX "rating_storeId_key" ON "rating"("storeId");

-- CreateIndex
CREATE UNIQUE INDEX "_customerTorating_AB_unique" ON "_customerTorating"("A", "B");

-- CreateIndex
CREATE INDEX "_customerTorating_B_index" ON "_customerTorating"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_mealToorder_AB_unique" ON "_mealToorder"("A", "B");

-- CreateIndex
CREATE INDEX "_mealToorder_B_index" ON "_mealToorder"("B");

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store" ADD CONSTRAINT "store_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store" ADD CONSTRAINT "store_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_customerTorating" ADD CONSTRAINT "_customerTorating_A_fkey" FOREIGN KEY ("A") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_customerTorating" ADD CONSTRAINT "_customerTorating_B_fkey" FOREIGN KEY ("B") REFERENCES "rating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mealToorder" ADD CONSTRAINT "_mealToorder_A_fkey" FOREIGN KEY ("A") REFERENCES "meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mealToorder" ADD CONSTRAINT "_mealToorder_B_fkey" FOREIGN KEY ("B") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

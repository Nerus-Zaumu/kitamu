/*
  Warnings:

  - Added the required column `storeId` to the `meal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MealStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE');

-- AlterTable
ALTER TABLE "meal" ADD COLUMN     "status" "MealStatus" NOT NULL DEFAULT 'UNAVAILABLE',
ADD COLUMN     "storeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "meal" ADD CONSTRAINT "meal_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

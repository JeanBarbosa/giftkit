-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Surprisegift" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "emailRecipient" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "selectedCardID" TEXT,
    CONSTRAINT "Surprisegift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "surprisegiftId" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    CONSTRAINT "Card_surprisegiftId_fkey" FOREIGN KEY ("surprisegiftId") REFERENCES "Surprisegift" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    CONSTRAINT "Item_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

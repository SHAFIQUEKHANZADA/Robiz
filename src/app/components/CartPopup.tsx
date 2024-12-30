"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import { removeFromCart, updateCartQuantity } from "../features/cart/cartSlice";
import Image from "next/image";
import { Archivo } from "next/font/google";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../hooks";

const archivo = Archivo({ subsets: ['latin'], weight: ["400"] })

const CartPopup = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };


  return (
    <div className={`${archivo.className}`}>
      <Sheet>
        <SheetTrigger asChild>
          <button className="relative flex items-center text-2xl group">
            <HiOutlineShoppingBag className="group-hover:text-black" />
            <span className="absolute bottom-[-8px] left-[-11px] bg-[#F7F7F7]  group-hover:bg-black  group-hover:text-[#F7F7F7] text-black text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">
              {totalItems}
            </span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="sm:w-[417px] w-[80vw]  bg-[#F7F7F7]">
          <SheetHeader>
            <SheetTitle className="font-light text-[18px] text-left">YOUR CART</SheetTitle>
            <div className="w-full h-[1.5px] bg-black mt-10"></div>
          </SheetHeader>

          {/* Cart Items */}
          <div className="py-4 overflow-y-auto scrollbar-hidden h-[57vh]">
            {cartItems.length === 0 ? (
              <div className="flex flex-col gap-2 justify-center items-center h-[60vh]">
                <h1 className="text-center text-black text-[20px] font-medium">YOUR CART IS EMPTY</h1>
                <p className="text-[15px]">Browse below to begin shopping</p>
                <Link href={"/"}><button className="mt-5 bg-[#111111] text-white px-10 py-4 text-[13px] buttonThree">CORE COLLECTION</button></Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <Image
                    src={item.image[0]} // Use the first image from the array
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-16 h-16 rounded-md"
                  />


                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">
                      {item.quantity} x ${isNaN(item.price) ? "0.00" : item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center mt-2">
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-white text-[20px] flex justify-center items-center rounded-full w-4 h-4 p-[11px] bg-[#9F9F9F] group-hover:bg-black"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Subtotal and Actions */}
          {cartItems.length > 0 && (
            <div>
              <div className="pt-4">
                <div className="flex items-center justify-between text-[#111111]">
                  <h4 className="text-[22px] font-medium">Subtotal:</h4>
                  <h4 className="font-medium text-[22px]">
                    ${calculateSubtotal().toFixed(2)}
                  </h4>
                </div>
                <p className="text-[14px] text-gray-500 pb-1">Taxes and shipping calculated at checkout</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:justify-between justify-center gap-3 mt-3">
                <button className="uppercase w-full py-[14px] buttonThree text-white bg-[#111111] sm:text-[13px] text-[12px]">cart</button>
                <button className="uppercase w-full py-[14px] buttonThree text-white bg-[#111111] sm:text-[13px] text-[12px]">check out</button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartPopup;


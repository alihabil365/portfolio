`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 10/22/2026 08:38:58 AM
// Design Name: 
// Module Name: full_adder
// Project Name: 
// Target Devices: 
// Tool Versions: 
// Description: 
// 
// Dependencies: 
// 
// Revision:
// Revision 0.01 - File Created
// Additional Comments:
// 
//////////////////////////////////////////////////////////////////////////////////



module one_bit_adder(input A,B, Cin, output S, Cout);

assign S = A ^ B^ Cin;
assign Cout = (Cin & (A^B)) | (A&B);

endmodule


module adder_subtractor(
input Mode, A7, A6, A5, A4, A3, A2, A1, A0, B3, B2, B1, B0, 
output S7, S6, S5, S4, S3, S2, S1, S0);

wire X0, X1, X2, X3, C1, C2, C3, C4, C5, C6, C7, F;

assign X0 = Mode ^ B0;
assign X1 = Mode ^ B1;
assign X2 = Mode ^ B2;
assign X3 = Mode ^ B3;

one_bit_adder FA0 (.A(A0), .B(X0), .Cin(Mode), .Cout(C1), .S(S0));
one_bit_adder FA1 (.A(A1), .B(X1), .Cin(C1), .Cout(C2), .S(S1));
one_bit_adder FA2 (.A(A2), .B(X2), .Cin(C2), .Cout(C3), .S(S2));
one_bit_adder FA3 (.A(A3), .B(X3), .Cin(C3), .Cout(C4), .S(S3));
one_bit_adder FA4 (.A(A4), .B(Mode), .Cin(C4), .Cout(C5), .S(S4));
one_bit_adder FA5 (.A(A5), .B(Mode), .Cin(C5), .Cout(C6), .S(S5));
one_bit_adder FA6 (.A(A6), .B(Mode), .Cin(C6), .Cout(C7), .S(S6));
one_bit_adder FA7 (.A(A7), .B(Mode), .Cin(C7), .Cout(F), .S(S7));


endmodule

module D_FF(
input clk, Rst, D, En,
output reg Q);

always @(posedge clk or posedge Rst) begin
    if (Rst) begin
        Q <= 0;          
    end else if (En) begin
        Q <= D;             
    end
   
end

endmodule

module accumlator(
input Rst, clk, En, D7, D6, D5, D4, D3, D2, D1, D0,
output Q7, Q6, Q5, Q4 , Q3, Q2, Q1, Q0
);

D_FF FF0 (.D(D0), .clk(clk), .Rst(Rst), .En(En), .Q(Q0));
D_FF FF1 (.D(D1), .clk(clk), .Rst(Rst), .En(En), .Q(Q1));
D_FF FF2 (.D(D2), .clk(clk), .Rst(Rst), .En(En), .Q(Q2));
D_FF FF3 (.D(D3), .clk(clk), .Rst(Rst), .En(En), .Q(Q3));
D_FF FF4 (.D(D4), .clk(clk), .Rst(Rst), .En(En), .Q(Q4));
D_FF FF5 (.D(D5), .clk(clk), .Rst(Rst), .En(En), .Q(Q5));
D_FF FF6 (.D(D6), .clk(clk), .Rst(Rst), .En(En), .Q(Q6));
D_FF FF7 (.D(D7), .clk(clk), .Rst(Rst), .En(En), .Q(Q7));


endmodule

module pulse_gen(input clk, Rst, Button, output Pulse);

wire sync1, sync2, prev;

D_FF FFA (.D(Button), .clk(clk), .Rst(Rst), .En(1'b1), .Q(sync1));
D_FF FFB (.D(sync1), .clk(clk), .Rst(Rst), .En(1'b1), .Q(sync2));
D_FF FFC (.D(sync2), .clk(clk), .Rst(Rst), .En(1'b1), .Q(prev));

assign Pulse = ~prev & sync2;

endmodule

module continuous_add_sub(input clk, reset, Add, Sub, in3, in2, in1, in0, output out7, out6, out5, out4, out3, out2, out1, out0);

wire add_pulse, enablew, sub_pulse, S7, S6, S5, S4, S3, S2, S1, S0;
 
pulse_gen PG_ADD (.Button(Add), .Rst(reset), .clk(clk), .Pulse(add_pulse));
pulse_gen PG_SUB (.Button(Sub), .Rst(reset), .clk(clk), .Pulse(sub_pulse));

assign enablew = add_pulse ^ sub_pulse; 

adder_subtractor AS (
.A7(out7), .A6(out6), .A5(out5), .A4(out4), .A3(out3), .A2(out2), .A1(out1), .A0(out0),
.B3(in3), .B2(in2), .B1(in1), .B0(in0), .Mode(sub_pulse),
.S7(S7), .S6(S6), .S5(S5), .S4(S4), .S3(S3), .S2(S2), .S1(S1), .S0(S0)
);

accumlator ACC(.D7(S7), .D6(S6), .D5(S5), .D4(S4), .D3(S3), .D2(S2), .D1(S1), .D0(S0),
.Rst(reset), .En(enablew), .clk(clk), .Q7(out7), .Q6(out6), .Q5(out5), .Q4(out4), .Q3(out3), .Q2(out2), .Q1(out1), .Q0(out0)
);

endmodule

'use client';

import { useState } from 'react';

export default function MotorIXLandingPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Interactive sample state for the mechanic preview
  const [sampleTotal, setSampleTotal] = useState(1250);
  const [customerPhone, setCustomerPhone] = useState('');
  const [diagnosticTool, setDiagnosticTool] = useState('BMW ISTA Rheingold (OEM Diagnostics)');
  const [bayLocation, setBayLocation] = useState('Ramp 03 - Heavy Engine & Diagnostic Lift');
  
  const depositRate = 30; // 30% deposit
  const calculatedDeposit = (sampleTotal * (depositRate / 100)).toFixed(2);

  const handleSendWhatsApp = () => {
    if (!customerPhone) {
      alert('Please enter the customer phone number first.');
      return;
    }
    const message = encodeURIComponent(
      `Hello James, here is your repair quote from Motor IX for your BMW F30 335i Valvetronic service. Diagnosed via ${diagnosticTool} on ${bayLocation}. Total: €${sampleTotal}. Required 30% Part Deposit: €${calculatedDeposit}. Tap here to secure your parts deposit: https://pay.motorix.io/sample-deposit`
    );
    window.open(`https://wa.me/${customerPhone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="relative min-h-screen text-zinc-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Garage Background Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-zinc-950/88 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10">
        
        {/* Navigation Header */}
        <nav className="border-b border-zinc-800/80 bg-zinc-950/75 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Custom High-End Badge Logo */}
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-0.5 shadow-lg shadow-blue-600/30">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center border border-blue-500/40">
                  <span className="text-blue-400 font-black text-sm tracking-tighter">M<span className="text-white">IX</span></span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-white">MOTOR IX</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">Workshop Suite</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
              <a href="#about" className="hover:text-white transition-colors">The Platform</a>
              <a href="#live-demo" className="hover:text-white transition-colors">BMW F30 335i Example</a>
              <a href="#workflow" className="hover:text-white transition-colors">Workshop Floor</a>
              <a href="#brands" className="hover:text-white transition-colors">Specialized Marques</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20"
              >
                Launch Workshop
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-8 backdrop-blur-sm">
            <span>⚡ European Workshop Automation SaaS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Built For The <span className="text-blue-500">Workshop Floor Up</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Independent European mechanics dealing with complex electrical diagnostics, high-end German performance engines, and specialized parts need more than a generic notepad. Motor IX gives your shop complete control over professional repair estimates, instant customer WhatsApp communication, and bulletproof upfront part deposits before your bays are tied up.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowDemoModal(true)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-xl shadow-blue-600/30"
            >
              Start Free Trial
            </button>
            <a 
              href="#live-demo"
              className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 px-8 py-4 rounded-xl text-base font-semibold transition-colors backdrop-blur-md"
            >
              View BMW F30 335i Example
            </a>
          </div>
        </section>

        {/* Supported Marques Bar */}
        <section id="brands" className="py-10 border-y border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-6">
              Optimized for European Performance Mechanics
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
              <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl font-bold tracking-wider text-zinc-200 backdrop-blur-sm">
                AUDI / VAG
              </div>
              <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl font-bold tracking-wider text-zinc-200 backdrop-blur-sm">
                BMW M-POWER
              </div>
              <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl font-bold tracking-wider text-zinc-200 backdrop-blur-sm">
                MERCEDES-AMG
              </div>
              <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl font-bold tracking-wider text-zinc-200 backdrop-blur-sm">
                PORSCHE
              </div>
            </div>
          </div>
        </section>

        {/* Extended About Section */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Complete Workshop Solution</span>
              <h2 className="text-3xl font-bold tracking-tight">Eliminate Unpaid Bench Time & Parts Guesswork</h2>
              <p className="text-zinc-300 leading-relaxed">
                When a customer brings in a complex German performance machine, sourcing components like high-pressure fuel pumps, valvetronic servomotors, or precision assemblies requires significant upfront capital. Motor IX ensures your shop never orders specialized parts out of pocket.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Our platform streamlines your daily service workflow from diagnostic scan to final vehicle handover, integrating real-time deposit calculation and automated WhatsApp customer notifications directly into one unified interface.
              </p>
            </div>
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 backdrop-blur-md shadow-2xl space-y-4">
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Core System Modules</div>
              <div className="space-y-3">
                <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-xl">
                  <h4 className="font-semibold text-white text-sm">Instant Quote Engine</h4>
                  <p className="text-xs text-zinc-400 mt-1">Break down labor hours, OEM part numbers, and fluid requirements cleanly.</p>
                </div>
                <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-xl">
                  <h4 className="font-semibold text-white text-sm">Automated Deposit Gateway</h4>
                  <p className="text-xs text-zinc-400 mt-1">Instantly compute percentage-based deposits and dispatch WhatsApp payment links.</p>
                </div>
                <div className="p-4 bg-zinc-950/60 border border-zinc-800/80 rounded-xl">
                  <h4 className="font-semibold text-white text-sm">Bay Progress Tracking</h4>
                  <p className="text-xs text-zinc-400 mt-1">Keep track of active lifts, waiting parts, and completed quality control checks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Workshop Repair Ticket Section (Featuring BMW F30 335i N55 Valvetronic) */}
        <section id="live-demo" className="py-20 max-w-5xl mx-auto px-6 border-t border-zinc-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Live Example Ticket</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2">BMW F30 335i Service Walkthrough</h2>
            <p className="text-zinc-400 mt-2">Select the exact OEM/Aftermarket diagnostic tool, assign your shop ramp, and send the quote to James.</p>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-800 pb-6 mb-6 gap-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Active Workshop Ticket #IX-8832</span>
                <h3 className="text-xl font-bold mt-1">BMW F30 335i (N55 Inline-6 Engine)</h3>
              </div>
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold">
                Waiting on 30% Deposit
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-400">Customer:</span>
                  <span className="font-medium text-white">James</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-400">Service Performed:</span>
                  <span className="font-medium text-white">Valvetronic Servomotor Teardown & Calibration</span>
                </div>

                {/* Comprehensive Diagnostic Tool Selector */}
                <div className="flex justify-between py-2 border-b border-zinc-800/60 items-center">
                  <span className="text-zinc-400">Diagnostic Tool / Software:</span>
                  <select 
                    value={diagnosticTool}
                    onChange={(e) => setDiagnosticTool(e.target.value)}
                    className="bg-zinc-950 border border-zinc-700 rounded-lg p-1.5 text-xs font-semibold text-blue-400 focus:outline-none focus:border-blue-500 max-w-[200px]"
                  >
                    <optgroup label="BMW / MINI">
                      <option value="BMW ISTA Rheingold (OEM Diagnostics)">BMW ISTA Rheingold (OEM)</option>
                      <option value="BMW INPA / NCS Expert">BMW INPA / NCS Expert</option>
                      <option value="BimmerLink / BimmerCode OBD">BimmerLink / BimmerCode</option>
                    </optgroup>
                    <optgroup label="Audi / VAG">
                      <option value="Audi ODIS Service (VAG OEM)">Audi ODIS Service (VAG OEM)</option>
                      <option value="VCDS / VAG-COM Diagnostic System">VCDS / VAG-COM</option>
                    </optgroup>
                    <optgroup label="Mercedes-Benz">
                      <option value="Mercedes Xentry / DAS (OEM)">Mercedes Xentry / DAS (OEM)</option>
                      <option value="Mercedes DTS Monaco / Vediamo">Mercedes DTS Monaco</option>
                    </optgroup>
                    <optgroup label="Porsche">
                      <option value="Porsche PIWIS III (OEM Diagnostics)">Porsche PIWIS III (OEM)</option>
                    </optgroup>
                    <optgroup label="Universal Multi-Brand Scanners">
                      <option value="Autel MaxiSys MS908 / Ultra">Autel MaxiSys MS908 / Ultra</option>
                      <option value="Launch X431 PAD VII Elite">Launch X431 PAD VII Elite</option>
                      <option value="Bosch KTS 590 Diagnostics">Bosch KTS 590 Diagnostics</option>
                      <option value="Snap-on Zeus / Apollo Scan">Snap-on Zeus / Apollo</option>
                    </optgroup>
                  </select>
                </div>

                {/* Comprehensive Workshop Bay & Ramp Selector */}
                <div className="flex justify-between py-2 border-b border-zinc-800/60 items-center">
                  <span className="text-zinc-400">Workshop Bay / Ramp:</span>
                  <select 
                    value={bayLocation}
                    onChange={(e) => setBayLocation(e.target.value)}
                    className="bg-zinc-950 border border-zinc-700 rounded-lg p-1.5 text-xs font-semibold text-emerald-400 focus:outline-none focus:border-blue-500 max-w-[200px]"
                  >
                    <option value="Ramp 01 - Two-Post Main Lift">Ramp 01 - Two-Post Main Lift</option>
                    <option value="Ramp 02 - Two-Post Lift (Engine Bay)">Ramp 02 - Two-Post Lift (Engine Bay)</option>
                    <option value="Ramp 03 - Heavy Engine & Diagnostic Lift">Ramp 03 - Heavy Diagnostics Lift</option>
                    <option value="Ramp 04 - Four-Post Alignment Lift">Ramp 04 - Four-Post Alignment</option>
                    <option value="Ramp 05 - Low-Profile Supercar Lift">Ramp 05 - Low-Profile Supercar Lift</option>
                    <option value="Pit 01 - Undercarriage Inspection Pit">Pit 01 - Inspection Pit</option>
                    <option value="Flat Bay 01 - Electrical & ECU Coding Station">Flat Bay 01 - ECU Coding Station</option>
                    <option value="Flat Bay 02 - Quick Service / Fluid Change">Flat Bay 02 - Quick Service</option>
                  </select>
                </div>

                <div className="flex justify-between py-2 items-center">
                  <span className="text-zinc-400">Adjust Quote Total (€):</span>
                  <input 
                    type="number" 
                    value={sampleTotal}
                    onChange={(e) => setSampleTotal(Number(e.target.value))}
                    className="w-32 bg-zinc-950 border border-zinc-700 rounded-lg p-1.5 text-right text-sm font-bold text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Instant WhatsApp Deposit Request</span>
                  <div className="text-3xl font-extrabold text-blue-400 mt-2">€{calculatedDeposit}</div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Scanned via <span className="text-white font-semibold">{diagnosticTool}</span> on <span className="text-white font-semibold">{bayLocation}</span>. 30% required before parts order.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs text-zinc-400">James's WhatsApp Number</label>
                  <input 
                    type="text" 
                    placeholder="e.g. +35699112233"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button 
                  onClick={handleSendWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Workflow Section */}
        <section id="workflow" className="py-20 max-w-7xl mx-auto px-6 border-t border-zinc-800/80">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engineered for the Workshop Floor</h2>
            <p className="text-zinc-300 mt-4">A complete end-to-end breakdown of how Motor IX operates inside your facility.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold rounded-xl flex items-center justify-center mb-6 text-lg">
                  01
                </div>
                <h3 className="text-xl font-bold mb-3">Quote the Repair</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Log vehicle specs, part requirements, and technician hours instantly into a clean digital estimate.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold rounded-xl flex items-center justify-center mb-6 text-lg">
                  02
                </div>
                <h3 className="text-xl font-bold mb-3">Lock In Part Deposit</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Trigger an automated WhatsApp notification requesting an upfront deposit before placing orders with suppliers.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold rounded-xl flex items-center justify-center mb-6 text-lg">
                  03
                </div>
                <h3 className="text-xl font-bold mb-3">Complete & Handover</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Clear remaining balances, log service notes, and notify your client when their car is off the lift.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800/80 py-10 bg-zinc-950/80 backdrop-blur-md text-center text-zinc-500 text-sm">
          <p>© 2026 Motor IX SaaS. Tailored for European Mechanical Workshops.</p>
        </footer>

      </div>

      {/* Trial Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-md space-y-6 shadow-2xl">
            <h3 className="text-2xl font-bold">Register Your Workshop</h3>
            <p className="text-sm text-zinc-400">
              Start issuing quotes and collecting part deposits today.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Account created! Welcome to Motor IX.'); setShowDemoModal(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">Workshop Name</label>
                <input required type="text" placeholder="e.g. Bavarian Motor Werks" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">Work Email</label>
                <input required type="email" placeholder="service@workshop.de" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowDemoModal(false)} className="px-4 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-white">Cancel</button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold">Launch</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
'use client';

import { Shield, Server, Database, Activity, Code, Layers } from 'lucide-react';

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Animated floating cards */}
      <div className="absolute top-16 right-8 w-40 h-24 bg-slate-800/60 border border-emerald-500/30 rounded-xl backdrop-blur-sm shadow-2xl transform rotate-6 animate-float-slow">
        <div className="p-3">
          <div className="flex items-center mb-2">
            <Activity className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-xs text-emerald-400 font-medium">Real-time Monitoring</span>
          </div>
          <div className="space-y-1">
            <div className="w-full h-2 bg-gradient-to-r from-emerald-500/80 to-emerald-400/60 rounded-full animate-pulse"></div>
            <div className="w-3/4 h-1.5 bg-slate-400/40 rounded-full"></div>
            <div className="w-1/2 h-1.5 bg-slate-400/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Security badge */}
      <div className="absolute bottom-20 right-12 w-32 h-20 bg-slate-800/70 border border-emerald-400/40 rounded-xl backdrop-blur-sm shadow-2xl transform -rotate-3 animate-float-medium">
        <div className="p-3 flex flex-col items-center justify-center h-full">
          <Shield className="w-6 h-6 text-emerald-400 mb-1" />
          <span className="text-xs text-emerald-400 font-semibold">Enterprise Security</span>
          <div className="w-full h-1 bg-emerald-500/60 rounded-full mt-1"></div>
        </div>
      </div>

      {/* Infrastructure element */}
      <div className="absolute top-20 left-8 w-36 h-22 bg-slate-800/50 border border-emerald-300/30 rounded-xl backdrop-blur-sm shadow-2xl transform rotate-3 animate-float-fast">
        <div className="p-3">
          <div className="flex items-center mb-2">
            <Server className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-xs text-emerald-400 font-medium">Infrastructure</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="w-full h-2 bg-emerald-500/70 rounded animate-pulse"></div>
            <div className="w-full h-2 bg-emerald-400/50 rounded animate-pulse delay-100"></div>
            <div className="w-full h-2 bg-emerald-300/40 rounded animate-pulse delay-200"></div>
          </div>
        </div>
      </div>

      {/* Database connection */}
      <div className="absolute bottom-32 left-12 w-28 h-18 bg-slate-800/60 border border-emerald-500/40 rounded-lg backdrop-blur-sm shadow-2xl transform -rotate-6 animate-float-slow">
        <div className="p-2 flex flex-col items-center justify-center h-full">
          <Database className="w-5 h-5 text-emerald-400 mb-1" />
          <span className="text-xs text-emerald-400 font-medium">Data Sync</span>
          <div className="flex space-x-1 mt-1">
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping"></div>
            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-75"></div>
            <div className="w-1 h-1 bg-emerald-300 rounded-full animate-ping delay-150"></div>
          </div>
        </div>
      </div>

      {/* Code snippet */}
      <div className="absolute top-40 right-16 w-44 h-28 bg-slate-900/70 border border-emerald-400/30 rounded-lg backdrop-blur-sm shadow-2xl transform rotate-2 animate-float-medium">
        <div className="p-3">
          <div className="flex items-center mb-2">
            <Code className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-xs text-emerald-400 font-medium">Migration Script</span>
          </div>
          <div className="space-y-1 font-mono text-xs">
            <div className="text-emerald-300">migrate --source=pg</div>
            <div className="text-slate-400">--target=snowflake</div>
            <div className="text-emerald-400">✓ Schema mapped</div>
          </div>
        </div>
      </div>

      {/* Layered architecture */}
      <div className="absolute bottom-40 left-20 w-32 h-20 bg-slate-800/60 border border-emerald-300/40 rounded-xl backdrop-blur-sm shadow-2xl transform -rotate-2 animate-float-fast">
        <div className="p-3 flex flex-col items-center justify-center h-full">
          <Layers className="w-5 h-5 text-emerald-400 mb-1" />
          <span className="text-xs text-emerald-400 font-medium">Multi-Layer</span>
          <div className="flex space-x-1 mt-1">
            <div className="w-6 h-1 bg-emerald-500/80 rounded"></div>
            <div className="w-4 h-1 bg-emerald-400/60 rounded"></div>
            <div className="w-3 h-1 bg-emerald-300/40 rounded"></div>
          </div>
        </div>
      </div>

      {/* Geometric shapes for additional visual interest */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-emerald-500/20 rotate-45 animate-spin-slow">
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent rounded-sm"></div>
      </div>
      
      <div className="absolute top-32 right-20 w-12 h-12 border border-emerald-400/30 rounded-full animate-pulse">
        <div className="w-full h-full bg-radial-gradient from-emerald-400/20 to-transparent rounded-full"></div>
      </div>
      
      <div className="absolute bottom-40 right-16 w-20 h-20 border border-emerald-300/20 rotate-12 animate-float-slow">
        <div className="w-full h-full bg-gradient-to-tr from-emerald-300/10 to-transparent transform rotate-45"></div>
      </div>
    </div>
  );
}

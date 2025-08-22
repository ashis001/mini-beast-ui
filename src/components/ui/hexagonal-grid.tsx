'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HexagonalGridItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description?: string;
  isHighlighted?: boolean;
  onClick?: () => void;
}

interface HexagonalGridProps {
  items: HexagonalGridItem[];
  className?: string;
}

const HexagonItem = ({ item, position }: { item: HexagonalGridItem; position: { row: number; col: number } }) => {
  const Icon = item.icon;
  
  return (
    <div
      className="relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
      onClick={item.onClick}
      style={{
        transform: `translate(${position.col * 140 + (position.row % 2) * 70}px, ${position.row * 120}px)`
      }}
    >
      {/* Hexagon Background */}
      <div className="relative w-36 h-36">
        {/* Main hexagon */}
        <div
          className={cn(
            "absolute inset-2 transition-all duration-300",
            "bg-slate-800/80 border border-slate-700/30",
            "clip-path-hexagon",
            "group-hover:bg-slate-700/90 group-hover:border-slate-600/50",
            item.isHighlighted && "bg-emerald-900/40 border-emerald-500/60"
          )}
        />
        
        {/* Glow effect for highlighted item */}
        {item.isHighlighted && (
          <div className="absolute inset-0 bg-emerald-500/20 clip-path-hexagon blur-sm" />
        )}
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
          <Icon 
            size={28} 
            className={cn(
              "mb-3 transition-colors duration-300",
              item.isHighlighted ? "text-emerald-400" : "text-slate-400",
              "group-hover:text-emerald-400"
            )} 
          />
          <span 
            className={cn(
              "text-sm font-medium leading-tight transition-colors duration-300",
              item.isHighlighted ? "text-emerald-300" : "text-slate-300",
              "group-hover:text-emerald-300"
            )}
          >
            {item.title}
          </span>
        </div>
      </div>
      
      {/* Tooltip */}
      {item.description && (
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <div className="bg-slate-900/95 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-300 whitespace-nowrap shadow-xl backdrop-blur-sm">
            {item.description}
          </div>
        </div>
      )}
    </div>
  );
};

export const HexagonalGrid = ({ items, className }: HexagonalGridProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center py-8", className)}>
      {/* Top row - 4 hexagons */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {items.slice(0, 4).map((item, index) => (
          <div key={item.id} className="relative">
            <HexagonSimple item={item} />
          </div>
        ))}
      </div>
      
      {/* Middle row - 5 hexagons (offset) */}
      <div className="flex items-center justify-center gap-2 mb-4 -ml-16">
        {items.slice(4, 9).map((item, index) => (
          <div key={item.id} className="relative">
            <HexagonSimple item={item} />
          </div>
        ))}
      </div>
      
      {/* Bottom row - 4 hexagons */}
      <div className="flex items-center justify-center gap-2">
        {items.slice(9, 13).map((item, index) => (
          <div key={item.id} className="relative">
            <HexagonSimple item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const HexagonSimple = ({ item }: { item: HexagonalGridItem }) => {
  const Icon = item.icon;
  
  return (
    <div className="relative group cursor-pointer transition-all duration-300 hover:scale-105">
      {/* Hexagon Background */}
      <div className="relative w-28 h-28">
        <div
          className={cn(
            "absolute inset-1 transition-all duration-300",
            "bg-slate-800/80 border border-slate-700/30",
            "clip-path-hexagon",
            "group-hover:bg-slate-700/90 group-hover:border-slate-600/50",
            item.isHighlighted && "bg-emerald-900/40 border-emerald-500/60"
          )}
        />
        
        {/* Glow effect for highlighted item */}
        {item.isHighlighted && (
          <div className="absolute inset-0 bg-emerald-500/20 clip-path-hexagon blur-sm" />
        )}
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <Icon 
            size={20} 
            className={cn(
              "mb-2 transition-colors duration-300",
              item.isHighlighted ? "text-emerald-400" : "text-slate-400",
              "group-hover:text-emerald-400"
            )} 
          />
          <span 
            className={cn(
              "text-xs font-medium leading-tight transition-colors duration-300",
              item.isHighlighted ? "text-emerald-300" : "text-slate-300",
              "group-hover:text-emerald-300"
            )}
          >
            {item.title}
          </span>
        </div>
      </div>
      
      {/* Tooltip */}
      {item.description && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <div className="bg-slate-900/95 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-300 whitespace-nowrap shadow-xl backdrop-blur-sm">
            {item.description}
          </div>
        </div>
      )}
    </div>
  );
};

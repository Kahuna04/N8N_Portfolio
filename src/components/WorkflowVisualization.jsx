import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import {
    Workflow,
    Database,
    Mail,
    MessageSquare,
    FileText,
    Calendar,
    Code,
    Zap,
    Filter,
    GitBranch
} from 'lucide-react';

const WorkflowVisualization = ({ workflowFile, onClose }) => {
    const [workflowData, setWorkflowData] = useState(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const loadWorkflow = async () => {
            try {
                const response = await fetch(`/workflows/${workflowFile}`);
                const data = await response.json();
                setWorkflowData(data);
            } catch (error) {
                console.error('Error loading workflow:', error);
            }
        };

        if (workflowFile) {
            loadWorkflow();
        }
    }, [workflowFile]);

    if (!workflowData) {
        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="workflow-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="workflow-header">
                        <h3 className="workflow-title">Loading workflow...</h3>
                        <button onClick={onClose} className="close-button">
                            <X size={20} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const getNodeIcon = (nodeType) => {
        const type = nodeType.toLowerCase();
        if (type.includes('webhook')) return Zap;
        if (type.includes('airtable') || type.includes('database')) return Database;
        if (type.includes('gmail') || type.includes('mail')) return Mail;
        if (type.includes('slack')) return MessageSquare;
        if (type.includes('google') || type.includes('sheets')) return FileText;
        if (type.includes('calendar')) return Calendar;
        if (type.includes('set') || type.includes('code')) return Code;
        if (type.includes('if') || type.includes('switch')) return GitBranch;
        if (type.includes('filter')) return Filter;
        return Workflow;
    };

    const getNodeDescription = (node) => {
        const type = node.type.split('.').pop();
        const operation = node.parameters?.operation || '';

        if (type === 'webhook') return 'Receives incoming HTTP requests';
        if (type === 'set') return 'Transforms and structures data';
        if (type === 'airtable') {
            if (operation === 'search') return 'Searches for records in Airtable';
            if (operation === 'create') return 'Creates new records in Airtable';
            if (operation === 'update') return 'Updates existing records';
        }
        if (type === 'gmail') return 'Sends email via Gmail';
        if (type === 'slack') return 'Sends message to Slack channel';
        if (type === 'googleSheets') return 'Appends data to Google Sheets';
        if (type === 'if') return 'Conditional branching logic';

        return `Performs ${operation || 'operation'}`;
    };

    // Calculate canvas dimensions based on node positions
    const calculateCanvasDimensions = () => {
        if (!workflowData.nodes || workflowData.nodes.length === 0) {
            return { width: 1000, height: 600, minX: 0, minY: 0 };
        }

        const positions = workflowData.nodes.map(node => ({
            x: node.position[0],
            y: node.position[1]
        }));

        const minX = Math.min(...positions.map(p => p.x)) - 100;
        const maxX = Math.max(...positions.map(p => p.x)) + 300;
        const minY = Math.min(...positions.map(p => p.y)) - 100;
        const maxY = Math.max(...positions.map(p => p.y)) + 200;

        return {
            width: maxX - minX,
            height: maxY - minY,
            minX,
            minY
        };
    };

    const dimensions = calculateCanvasDimensions();

    // Generate SVG path for connections
    const generateConnectionPath = (fromNode, toNode) => {
        const fromX = fromNode.position[0] - dimensions.minX + 200;
        const fromY = fromNode.position[1] - dimensions.minY + 40;
        const toX = toNode.position[0] - dimensions.minX;
        const toY = toNode.position[1] - dimensions.minY + 40;

        const midX = (fromX + toX) / 2;

        return `M ${fromX} ${fromY} C ${midX} ${fromY}, ${midX} ${toY}, ${toX} ${toY}`;
    };

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="workflow-modal"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                >
                    <div className="workflow-header">
                        <h3 className="workflow-title">{workflowData.name}</h3>
                        <button onClick={onClose} className="close-button">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="workflow-visualization">
                        <div className="workflow-controls">
                            <button
                                className="control-button"
                                onClick={() => setScale(Math.min(scale + 0.1, 2))}
                                title="Zoom In"
                            >
                                <ZoomIn size={18} />
                            </button>
                            <button
                                className="control-button"
                                onClick={() => setScale(Math.max(scale - 0.1, 0.5))}
                                title="Zoom Out"
                            >
                                <ZoomOut size={18} />
                            </button>
                            <button
                                className="control-button"
                                onClick={() => setScale(1)}
                                title="Reset Zoom"
                            >
                                <Maximize2 size={18} />
                            </button>
                        </div>

                        <div
                            className="workflow-canvas"
                            style={{
                                width: dimensions.width,
                                height: dimensions.height,
                                transform: `scale(${scale})`,
                                transformOrigin: 'top left',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            {/* SVG for connections */}
                            <svg
                                className="workflow-connections"
                                style={{
                                    width: dimensions.width,
                                    height: dimensions.height
                                }}
                            >
                                {workflowData.nodes.map(node => {
                                    const connections = workflowData.connections?.[node.name]?.main?.[0] || [];
                                    return connections.map((conn, idx) => {
                                        const targetNode = workflowData.nodes.find(n => n.name === conn.node);
                                        if (!targetNode) return null;

                                        return (
                                            <path
                                                key={`${node.id}-${idx}`}
                                                className="workflow-connection"
                                                d={generateConnectionPath(node, targetNode)}
                                            />
                                        );
                                    });
                                })}
                            </svg>

                            {/* Nodes */}
                            {workflowData.nodes.map((node, index) => {
                                const NodeIcon = getNodeIcon(node.type);
                                const x = node.position[0] - dimensions.minX;
                                const y = node.position[1] - dimensions.minY;

                                return (
                                    <motion.div
                                        key={node.id}
                                        className="workflow-node"
                                        style={{
                                            left: x,
                                            top: y
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <div className="node-header">
                                            <div className="node-icon">
                                                <NodeIcon size={16} />
                                            </div>
                                            <div className="node-name">{node.name}</div>
                                        </div>
                                        <div className="node-type">
                                            {node.type.split('.').pop()}
                                        </div>

                                        {/* Tooltip */}
                                        <div className="node-tooltip">
                                            <div className="tooltip-title">{node.name}</div>
                                            <div className="tooltip-description">
                                                {getNodeDescription(node)}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default WorkflowVisualization;
